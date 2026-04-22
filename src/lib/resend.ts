import { Resend } from "resend";

let cached: Resend | null = null;

export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!cached) cached = new Resend(key);
  return cached;
}

// Where contact-form messages get delivered. Set CONTACT_TO_EMAIL in env to override.
export const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL ?? "gourangpatidar2003@gmail.com";

// Resend requires a verified sender. Use onboarding@resend.dev for testing
// before you verify gourangpatidar.com in the Resend dashboard.
export const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
