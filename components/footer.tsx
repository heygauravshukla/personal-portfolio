import { Heart } from "lucide-react";
import Wrapper from "@/components/wrapper";

export default function Footer() {
  return (
    <footer className="py-8">
      <Wrapper>
        <p className="text-muted-foreground flex flex-wrap items-center justify-center gap-1.5">
          <span>Built with</span>
          <Heart className="inline size-4 fill-rose-500 stroke-rose-500" />
          <span className="sr-only">love</span>
          <span>by Gaurav Shukla.</span>
        </p>
      </Wrapper>
    </footer>
  );
}
