import { CheckCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Wrapper from "@/components/wrapper";
import { Typography } from "@/components/typography";

interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Front-end Development",
    description: "Building responsive, performant user interfaces",
    skills: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "Astro",
    ],
  },
  {
    title: "Accessibility",
    description: "Creating inclusive digital experiences",
    skills: [
      "WCAG 2.1 Guidelines",
      "Screen Reader Testing",
      "Keyboard Navigation",
      "Semantic HTML",
      "Accessible Forms",
      "Color Contrast",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive user experiences",
    skills: [
      "Responsive Design",
      "Design Systems",
      "Figma & Canva",
      "User Testing",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Optimizing development processes",
    skills: [
      "Git & GitHub",
      "CI/CD Pipelines",
      "Jest & Testing Library",
      "Webpack & Vite",
      "npm & pnpm",
      "VS Code & Cursor",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <Wrapper>
        <div className="mb-12">
          <Typography.H2 className="mb-4">Skills & Expertise</Typography.H2>
          <Typography.P className="text-muted-foreground max-w-[70ch]">
            My technical toolkit and specialized knowledge areas.
          </Typography.P>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary mt-0.5 size-5 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
