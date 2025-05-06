import Link from "next/link";

import { Icons } from "@/components/icons";
import TypographyH1 from "@/components/typography-h1";
import Wrapper from "@/components/wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Link {
  label: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const links: Link[] = [
  { label: "X", href: "https://x.com/heygauravshukla", icon: Icons.x },
  {
    label: "Instagram",
    href: "https://instagram.com/heygauravshukla",
    icon: Icons.instagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/heygauravshukla",
    icon: Icons.github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/heygauravshukla",
    icon: Icons.linkedin,
  },
];

export default function HeroSection() {
  return (
    <section className="@container py-24">
      <Wrapper>
        <Avatar className="size-16">
          <AvatarImage src="/gaurav-shukla.webp" alt="Gaurav Shukla" />
          <AvatarFallback>GS</AvatarFallback>
        </Avatar>

        <TypographyH1 className="mt-7 @md:text-balance">
          <span className="sr-only">Gaurav Shukla</span>
          Front-end developer and accessibility advocate.
        </TypographyH1>

        <p className="text-muted-foreground mt-4 max-w-[65ch] text-base/7">
          I&apos;m Gaurav, a front-end developer and accessibility advocate
          based in India. I build modern, inclusive web experiences with React
          and Next.js, ensuring digital products are usable by everyone
          regardless of ability.
        </p>

        <ul className="mt-6 flex items-center gap-7">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              Icon && (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="fill-muted-foreground hover:fill-primary size-5 transition-colors" />
                    <span className="sr-only">
                      Visit my {link.label} profile
                    </span>
                  </Link>
                </li>
              )
            );
          })}
        </ul>
      </Wrapper>
    </section>
  );
}
