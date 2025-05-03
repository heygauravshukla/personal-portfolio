import ProjectsList from "@/components/projects-list";
import Wrapper from "@/components/wrapper";
import TypographyH2 from "@/components/typography-h2";

export const metadata = {
  title: "Projects - Gaurav Shukla",
  description:
    "A collection of my recent work, side projects, and experiments.",
};

export default async function Projects() {
  return (
    <main>
      <section className="py-16">
        <Wrapper className="space-y-8">
          <TypographyH2>All projects</TypographyH2>
          <ProjectsList />
        </Wrapper>
      </section>
    </main>
  );
}
