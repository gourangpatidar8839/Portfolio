"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Label } from "@/components/ui/Input";

const schema = z.object({
  name: z.string().min(1, "Name is required").max(80),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Tell me a bit more (min 10 chars)").max(2000),
});
type FormValues = z.infer<typeof schema>;

export function ContactForm() {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStatus("ok");
      setMessage("Thanks — I'll reply within a couple of days.");
      reset();
    } catch (e) {
      setStatus("error");
      setMessage(e instanceof Error ? e.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Your name"
          className="mt-1.5"
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-sm font-medium text-ink/80">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@domain.com"
          className="mt-1.5"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm font-medium text-ink/80">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="What are you working on?"
          className="mt-1.5"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm font-medium text-ink/80">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>

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
