import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Icons } from "@/components/icons";
import TypographyH1 from "@/components/typography-h1";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/back-button";

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

// Generate metadata for SEO based on project slug
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const filePath = path.join(
    process.cwd(),
    "content/projects",
    `${params.slug}.mdx`,
  );
  const content = await fs.readFile(filePath, "utf-8");
  const { frontmatter } = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

// Render individual project page
export default async function Project(props: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const params = await props.params;
    const filePath = path.join(
      process.cwd(),
      "content/projects",
      `${params.slug}.mdx`,
    );
    const content = await fs.readFile(filePath, "utf-8");
    const data = await compileMDX<Frontmatter>({
      source: content,
      options: {
        parseFrontmatter: true,
      },
      components: {
        // Register custom MDX components here (ensure imports at top)
        // Button,
      },
    });

    return (
      <Wrapper className="@container space-y-8 py-16 md:py-20">
        <nav aria-label="Breadcrumb">
          <BackButton />
        </nav>

        <article className="mx-auto max-w-2xl space-y-4">
          <header className="space-y-6">
            <time
              dateTime={new Date(data.frontmatter.publishDate).toISOString()}
              className="text-muted-foreground flex items-center gap-3"
            >
              <span
                className="bg-muted-foreground h-4 w-0.5 rounded-full"
                aria-hidden="true"
              ></span>
              <span>
                {new Date(data.frontmatter.publishDate).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}
              </span>
            </time>

            <TypographyH1>{data.frontmatter.title}</TypographyH1>

            <ul className="flex flex-wrap items-center gap-3">
              {data.frontmatter.tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-base/7">
              {data.frontmatter.description}
            </p>

            <Image
              src={data.frontmatter.img}
              alt={
                data.frontmatter.img_alt ??
                `Preview image of ${data.frontmatter.title}`
              }
              width="750"
              height="550"
              className="w-full rounded-lg border"
            />

            <div className="flex flex-wrap items-center gap-3">
              {data.frontmatter.live_site_url && (
                <Button asChild>
                  <Link
                    href={data.frontmatter.live_site_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink />
                    View Live Site
                  </Link>
                </Button>
              )}
              {data.frontmatter.source_code_url && (
                <Button asChild variant="secondary">
                  <Link
                    href={data.frontmatter.source_code_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.github className="fill-current" />
                    Source Code
                  </Link>
                </Button>
              )}
            </div>
          </header>

          <main className="**:[a]:text-primary **:[code]:bg-muted **:[code]:text-muted-foreground **:[p,li]:text-muted-foreground **:[a]:underline **:[code]:rounded **:[code]:px-1 **:[code]:py-px **:[code]:text-sm **:[h2,h3]:mt-8 **:[h2,h3]:mb-4 **:[h2,h3]:border-b **:[h2,h3]:pb-2 **:[h2,h3]:text-xl **:[h2,h3]:font-medium **:[li]:pl-2 **:[p,li]:text-base/7 **:[ul]:list-disc **:[ul]:pl-8 **:[ul,p]:my-2">
            {data.content}
          </main>
        </article>
      </Wrapper>
    );
  } catch {
    // Trigger 404 if an MDX file is not found
    notFound();
  }
}
