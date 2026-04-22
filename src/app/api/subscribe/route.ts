import { NextResponse } from "next/server";
import { z } from "zod";
import { getResend } from "@/lib/resend";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid email" },
      { status: 400 }
    );
  }

  const { email } = parsed.data;
  const resend = getResend();

  // Dev fallback: log instead of recording when no API key is set
  if (!resend) {
    console.log("[subscribe] (no RESEND_API_KEY set) email:", email);
    return NextResponse.json({ ok: true, dev: true });
  }

  // To enable real subscriptions, create an Audience in Resend and set its ID here.
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    console.log("[subscribe] (no RESEND_AUDIENCE_ID set) email:", email);
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const { error } = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });
    if (error && !/already exists/i.test(error.message ?? "")) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[subscribe] Resend error:", e);
    return NextResponse.json(
      { error: "Could not subscribe. Try again later." },
      { status: 500 }
    );
  }
}
