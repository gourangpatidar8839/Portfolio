"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const schema = z.object({
  email: z.string().email("Enter a valid email"),
});
type FormValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStatus("ok");
      setMessage("Subscribed. Check your inbox to confirm.");
      reset();
    } catch (e) {
      setStatus("error");
      setMessage(e instanceof Error ? e.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="you@domain.com"
          aria-label="Email address"
          {...register("email")}
        />
        <Button type="submit" size="md" className="sm:w-auto" disabled={status === "loading"}>
          {status === "loading" ? "…" : "Subscribe"}
        </Button>
      </div>
      {errors.email && (
        <p className="text-sm font-medium text-ink/80">{errors.email.message}</p>
      )}
      {message && (
        <p
          className={`text-sm font-medium ${
            status === "error" ? "text-red-700" : "text-ink/80"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
