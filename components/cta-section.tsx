import Link from "next/link";
import { Mail } from "lucide-react";

import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-accent text-accent-foreground @container py-20 md:py-28">
      <Wrapper className="space-y-4 text-center @2xl:space-y-5">
        <h2 className="text-3xl font-medium tracking-tighter @xl:text-5xl">
          Interested in working together?
        </h2>
        <p className="text-muted-foreground">Let’s bring your ideas to life.</p>
        <Button asChild size="lg">
          <Link href="mailto:heygauravshukla@gmail.com">
            <Mail />
            Get in touch
          </Link>
        </Button>
      </Wrapper>
    </section>
  );
}
