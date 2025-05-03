import TypographyH2 from "@/components/typography-h2";
import Wrapper from "@/components/wrapper";

const skills: string[] = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Astro",
  "Git",
  "GitHub",
  "Figma",
];

export default function Skills() {
  return (
    <section className="bg-muted @container py-20 md:py-28">
      <Wrapper className="space-y-8">
        <TypographyH2>My technical skills.</TypographyH2>

        <ul className="flex flex-wrap gap-4 *:flex-1 @4xl:gap-6">
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className="text-muted-foreground border-muted-foreground min-w-fit rounded-md border border-dotted p-5 text-center uppercase @4xl:p-7"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </section>
  );
}
