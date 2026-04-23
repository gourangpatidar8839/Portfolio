import { renderOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getProject, projects } from "@/lib/projects";

export const alt = "Project by Gourang Patidar";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return renderOG({ title: "Project", variant: "project" });
  }
  return renderOG({
    title: project.title,
    subtitle: project.summary,
    meta: project.tags.slice(0, 3).join(" · "),
    variant: "project",
  });
}
