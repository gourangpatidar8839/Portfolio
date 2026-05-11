export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  problem?: string;
  approach?: string;
  tech?: string[];
  outcome?: string;
};

export const projects: Project[] = [
  {
    slug: "google-maps-lead-scraper",
    title: "Google Maps Lead Scraper",
    summary:
      "An n8n workflow that scrapes business leads from Google Maps without paying for any APIs. It pulls contact data and pushes it into Google Sheets automatically.",
    tags: ["n8n", "Lead Gen"],
    featured: true,
    problem:
      "Most lead scraping tools charge per record or require paid API subscriptions. For early-stage founders trying to find their first customers, that cost adds up before they have even validated anything.",
    approach:
      "Built a fully automated n8n workflow that scrapes business listings from Google Maps using free methods, extracts name, address, phone, and website, deduplicates the results, and pushes everything into a Google Sheet ready to use.",
    tech: ["n8n", "Google Sheets", "HTTP requests"],
    outcome:
      "A free lead pipeline any founder can set up in under 30 minutes. No API key, no billing, no dependencies.",
  },
  {
    slug: "reddit-ai-agent",
    title: "Reddit AI Agent",
    summary:
      "An n8n agent that monitors target subreddits, finds relevant posts, and uses an LLM to suggest comments. Everything goes into Google Sheets for a human to review before posting.",
    tags: ["n8n", "AI Agent"],
    featured: true,
    problem:
      "Reddit is one of the best places to find qualified leads and genuine conversations but manually tracking subreddits and writing contextual replies every day is not sustainable.",
    approach:
      "Built an n8n workflow that monitors a list of subreddits on a schedule, feeds each post to an LLM with context about the business, gets a suggested comment back, and logs everything to Google Sheets. The human reviews and decides what to post.",
    tech: ["n8n", "OpenAI", "Reddit API", "Google Sheets"],
    outcome:
      "Removes the manual work of monitoring Reddit entirely. The human-in-the-loop step keeps the quality high.",
  },
  {
    slug: "whatsapp-rag-agent",
    title: "WhatsApp AI Agent",
    summary:
      "A WhatsApp bot connected to a custom knowledge base using RAG. Small businesses use it to answer customer questions automatically without needing to reply manually every time.",
    tags: ["n8n", "RAG", "WhatsApp"],
    problem:
      "Small businesses get the same customer questions over and over on WhatsApp. Answering each one manually does not scale and generic chatbots do not know the business well enough to be useful.",
    approach:
      "Connected the WhatsApp Business API to an n8n workflow. Incoming messages trigger a retrieval pipeline that matches the question against a business-specific knowledge base and generates a reply. The owner only gets pulled in for things the bot cannot handle.",
    tech: ["n8n", "OpenAI", "Pinecone", "WhatsApp Business API"],
    outcome:
      "Handles the most common customer queries automatically. Owners stop spending mornings answering the same ten questions.",
  },
  {
    slug: "meeting-reminder-automation",
    title: "Meeting Reminder Automation",
    summary:
      "An n8n workflow that reads your calendar and sends meeting reminders through WhatsApp or email with context from the event, so people actually show up on time.",
    tags: ["n8n", "Automation"],
    problem:
      "People miss meetings or join late because they are deep in work and a calendar notification is easy to dismiss. A more direct reminder through the channel they actually check works better.",
    approach:
      "Built an n8n workflow that reads upcoming calendar events, pulls the attendees and agenda, and sends a personalised reminder 30 minutes and 5 minutes before via WhatsApp or email depending on preference.",
    tech: ["n8n", "Google Calendar", "WhatsApp API", "Gmail API"],
    outcome: "Takes about 20 minutes to set up and runs on its own after that.",
  },
  {
    slug: "twitter-x-scraper",
    title: "Twitter / X Scraper",
    summary:
      "An n8n automation that scrapes Twitter/X for target keywords or accounts, pulls post and engagement data, and saves it into a structured sheet for analysis or outreach.",
    tags: ["n8n", "Twitter/X"],
    problem:
      "Tracking conversations on Twitter/X and finding the right people to reach out to requires either an expensive tool or a lot of manual scrolling.",
    approach:
      "Built a workflow that takes a list of keywords or accounts as input, queries Twitter/X through n8n, structures the output with engagement metrics and timestamps, and pushes it to Google Sheets.",
    tech: ["n8n", "Twitter/X API", "Google Sheets"],
    outcome:
      "Clean, structured data from Twitter/X with no manual work and no expensive tool subscription.",
  },
];

export function getFeatured(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
