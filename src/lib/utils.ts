import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Gourang Patidar",
  role: "AI / ML Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gourangpatidar.com",
  email: "gourangpatidar2003@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/gourang-patidar/",
    twitter: "https://x.com/GourangPatidar",
  },
};
