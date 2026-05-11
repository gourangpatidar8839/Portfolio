export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  url: string;
  tags: string[];
  role: string;
  cover?: string;
  previewGradient?: [string, string];
  stats?: { value: string; label: string }[];
  problem?: string;
  approach?: string;
  tech?: string[];
  outcome?: string;
  featured?: boolean;
  shutDown?: boolean;
};

export const products: Product[] = [
  {
    slug: "lumira",
    name: "Lumira",
    tagline: "India's AI content studio. Seven models, one platform, built for how India works.",
    summary:
      "I built Lumira because Indian creators kept getting blocked on Western AI platforms. UPI was not supported, checkout kept failing, there were no GST invoices, and the models did not understand Indian content needs. Lumira puts seven AI models in one place and is built entirely around how India pays and creates.",
    url: "https://lumira.thequickai.com",
    tags: ["Live Product", "AI Video", "India"],
    role: "Founder & Builder",
    featured: true,
    previewGradient: ["from-mint", "to-soft-yellow"],
    stats: [
      { value: "10k+", label: "Creators" },
      { value: "500k+", label: "Generations" },
      { value: "7+", label: "AI models" },
    ],
    problem:
      "India has over 100 million content creators but most of the serious AI video and image tools are built for Western users. When an Indian creator tried to pay, checkout failed most of the time because UPI was not supported. Businesses could not claim it as a tax expense because there were no GST invoices. Credits expired before people could use them. And the models themselves did not understand Indian weddings, Bollywood aesthetics, or festival content well enough to generate anything useful.",
    approach:
      "I built an orchestration layer that connects seven SOTA models — Sora 2, Veo 3.1, Kling 3.0, Nano Banana Pro, Flux 2, Ideogram V3, and Seedream — and routes each generation request to the right one based on what is being created. Then I built the payments and billing layer from scratch to support UPI, GPay, PhonePe, and Paytm, with GST invoices and non-expiring credits. Added Hindi support and cultural prompt templates for the content types Indian creators actually need.",
    tech: ["Multi-model orchestration", "Sora / Veo / Kling / Flux", "Next.js", "UPI payments", "Python"],
    outcome:
      "10,000 creators and 500,000 generations so far. Pricing starts at free with no card required and goes up to studio plans for agencies.",
  },
  {
    slug: "thequickai",
    name: "The Quick AI",
    tagline: "Built it. Ran it for 16 months. Shut it down.",
    summary:
      "I co-founded The Quick AI in 2024 and ran it for 16 months before shutting it down. We started with an AI quiz generator that got to 167,000 quizzes and 6,000 users in four months, then pivoted to an automation agency where we served 11 clients and became profitable in 322 days with no funding. Shut it down in January 2026.",
    url: "https://thequickai.com",
    tags: ["Shut Down", "EdTech", "Automation"],
    role: "Co-Founder & AI Engineer",
    featured: true,
    shutDown: true,
    previewGradient: ["from-brand", "to-peach"],
    stats: [
      { value: "167k+", label: "Quizzes generated" },
      { value: "11", label: "Clients served" },
      { value: "322", label: "Days to profit" },
    ],
    problem:
      "We started by solving a simple problem for teachers and students: generating quiz questions from any content. You could drop in a PDF, a YouTube link, a handwritten note image and get a full question paper back in seconds. Later when we pivoted to automation, the problem shifted to helping small businesses stop doing repetitive work manually.",
    approach:
      "For the quiz product we built support for five question types across multiple languages and education levels. For the automation agency we used n8n to build lead generation pipelines, CRM workflows, outbound sequences, and internal automation for our clients. Everything was built and delivered by three people.",
    tech: ["n8n", "OpenAI", "Python", "Django", "Google Sheets"],
    outcome:
      "167,000 quizzes generated, 6,000 users, 11 clients served, profitable in 322 days with zero funding. Campus Tycoon at JEC: 1st place. IIT Bombay Eureka: top 150 out of 25,000 teams. M.P. Government Bundelkhand Hackathon: top 13 out of 600 teams. IIIT Nagpur Innovation Oasis: top 20 out of 400 startups. Shut down January 2026.\n\nWhen we got profitable I thought the signal was to expand into more services and more types of clients. Within a few months the product had no clear identity and we lost what had been working. I should have gone deeper instead of wider.\n\nI also went into this without any freelancing experience so I had no idea what client work actually costs from the inside. Not just money but time, communication overhead, and the energy it takes to manage people who are paying you. That was a big gap.\n\nThe hardest thing I learned was about validation. I spent months collecting feedback and everyone said the idea was great. That does not mean anything. The only real signal is when a stranger pays with their own money.",
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
