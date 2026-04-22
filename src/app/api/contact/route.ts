import { NextResponse } from "next/server";
import { z } from "zod";
import { getResend, CONTACT_TO, CONTACT_FROM } from "@/lib/resend";

const schema = z.object({
  name: z.string().min(1).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
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
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;
  const resend = getResend();

  // Dev fallback: log instead of sending when no API key is set
  if (!resend) {
    console.log("[contact] (no RESEND_API_KEY set) message:", { name, email, message });
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] Resend error:", e);
    return NextResponse.json(
      { error: "Could not send message. Try again later." },
      { status: 500 }
    );
  }
}
