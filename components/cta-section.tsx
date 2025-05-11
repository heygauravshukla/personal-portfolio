import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import { Typography } from "./typography";

export default function CTASection() {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <Wrapper className="text-center">
        <Typography.H2 className="mb-4">Let&apos;s Work Together</Typography.H2>
        <Typography.P className="mx-auto mb-8 max-w-xl">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </Typography.P>
        <Button asChild size="lg" className="group gap-1">
          <Link href="/contact">
            Get in Touch
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </Wrapper>
    </section>
  );
}
