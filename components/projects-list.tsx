import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

import Link from "next/link";
import Image from "next/image";

interface ProjectsProps {
  limit?: number;
}

// Define frontmatter structure for project MDX files
interface Frontmatter {
  title: string;
  publishDate: string;
  img: string;
  img_alt: string;
  description: string;
  live_site_url: string;
  source_code_url: string;
  tags: string[];
}

export default async function ProjectsList({ limit }: ProjectsProps) {
  try {
    const filenames = await fs.readdir(
      path.join(process.cwd(), "content/projects"),
    );

    let projects = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(process.cwd(), "content/projects", filename);
        const content = await fs.readFile(filePath, "utf-8");

        const { frontmatter } = await compileMDX<Frontmatter>({
          source: content,
          options: {
            parseFrontmatter: true,
          },
        });

        return {
          filename,
          slug: filename.replace(".mdx", ""),
          ...frontmatter,
        };
      }),
    );

    // Sort projects by publishDate (newest first)
    projects = projects.sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    );

    if (limit) {
      projects = projects.slice(0, limit);
    }

    return (
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(20rem,100%),1fr))] gap-4 sm:gap-6">
        {projects.map((project) => {
          return (
            <li
              key={project.title}
              className="bg-card overflow-hidden rounded-lg border"
            >
              <Link
                href={`/projects/${project.slug}`}
                aria-hidden="true"
                tabIndex={-1}
              >
                <Image
                  src={project.img}
                  alt={project.img_alt ?? `Screenshot of ${project.title}`}
                  width="362"
                  height="265"
                  className="w-full transition-transform hover:scale-105"
                />
              </Link>

              <div className="grid gap-2 p-4">
                <h3 className="text-card-foreground hover:text-primary text-xl font-medium tracking-tighter transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  } catch (error) {
    console.error("Error loading projects:", error);
    return <p>Error loading projects</p>;
  }
}
