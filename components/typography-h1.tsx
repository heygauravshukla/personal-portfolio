import { cn } from "@/lib/utils";

interface TypographyH1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export default function TypographyH1({
  className,
  children,
  ...props
}: TypographyH1Props) {
  return (
    <h1
      className={cn(
        "text-4xl leading-[1.1] font-medium tracking-tighter sm:text-5xl md:text-6xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
