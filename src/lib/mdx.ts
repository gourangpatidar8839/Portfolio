import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

export type PostFrontmatter = {
  title: string;
  summary: string;
  date: string;
  tags?: string[];
  cover?: string;
};

export type LoadedPost = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};

function ensureDir() {
  if (!fs.existsSync(POSTS_DIR)) return false;
  return true;
}

export function getMDXPostSlugs(): string[] {
  if (!ensureDir()) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getMDXPost(slug: string): LoadedPost | null {
  if (!ensureDir()) return null;
  const candidates = [
    path.join(POSTS_DIR, `${slug}.mdx`),
    path.join(POSTS_DIR, `${slug}.md`),
  ];
  const file = candidates.find((p) => fs.existsSync(p));
  if (!file) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getAllMDXPosts(): LoadedPost[] {
  return getMDXPostSlugs()
    .map((s) => getMDXPost(s))
    .filter((p): p is LoadedPost => p !== null)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}
