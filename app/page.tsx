import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";

import Wrapper from "@/components/wrapper";
import TypographyH2 from "@/components/typography-h2";
import ProjectsList from "@/components/projects-list";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <section className="@container py-20 md:py-28">
        <Wrapper className="space-y-8">
          <TypographyH2>Projects I have built.</TypographyH2>
          <ProjectsList limit={3} />
        </Wrapper>
      </section>
    </>
  );
}
