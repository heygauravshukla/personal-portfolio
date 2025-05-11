import { cn } from "@/lib/utils";

const H1 = ({ className, children, ...props }: React.ComponentProps<"h1">) => {
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
};
H1.displayName = "Typography.H1";

const H2 = ({ className, children, ...props }: React.ComponentProps<"h2">) => {
  return (
    <h2
      className={cn(
        "text-3xl font-medium tracking-tighter sm:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
H2.displayName = "Typography.H2";

const H3 = ({ className, children, ...props }: React.ComponentProps<"h3">) => {
  return (
    <h3
      className={cn("text-2xl font-medium tracking-tighter", className)}
      {...props}
    >
      {children}
    </h3>
  );
};
H3.displayName = "Typography.H3";

const H4 = ({ className, children, ...props }: React.ComponentProps<"h4">) => {
  return (
    <h4
      className={cn("text-xl font-medium tracking-tighter", className)}
      {...props}
    >
      {children}
    </h4>
  );
};
H4.displayName = "Typography.H4";

const P = ({ className, children, ...props }: React.ComponentProps<"p">) => {
  return (
    <p className={cn("leading-7", className)} {...props}>
      {children}
    </p>
  );
};
P.displayName = "Typography.P";

const Lead = ({ className, children, ...props }: React.ComponentProps<"p">) => {
  return (
    <p className={cn("text-muted-foreground text-xl", className)} {...props}>
      {children}
    </p>
  );
};
Lead.displayName = "Typography.Lead";

const Large = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div className={cn("text-lg font-medium", className)} {...props}>
      {children}
    </div>
  );
};
Large.displayName = "Typography.Large";

const Small = ({
  className,
  children,
  ...props
}: React.ComponentProps<"small">) => {
  return (
    <small
      className={cn("text-sm leading-none font-medium", className)}
      {...props}
    >
      {children}
    </small>
  );
};
Small.displayName = "Typography.Small";

const Subtle = ({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) => {
  return (
    <p className={cn("text-muted-foreground text-sm", className)} {...props}>
      {children}
    </p>
  );
};
Subtle.displayName = "Typography.Subtle";

const Blockquote = ({
  className,
  children,
  ...props
}: React.ComponentProps<"blockquote">) => {
  return (
    <blockquote
      className={cn(
        "border-primary text-muted-foreground mt-6 border-l-2 pl-6 italic",
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
};
Blockquote.displayName = "Typography.Blockquote";

const Code = ({
  className,
  children,
  ...props
}: React.ComponentProps<"code">) => {
  return (
    <code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
};
Code.displayName = "Typography.Code";

const List = ({
  className,
  children,
  ...props
}: React.ComponentProps<"ul">) => {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
      {children}
    </ul>
  );
};
List.displayName = "Typography.List";

const InlineLink = ({
  className,
  children,
  ...props
}: React.ComponentProps<"a">) => {
  return (
    <a
      className={cn(
        "text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
InlineLink.displayName = "Typography.InlineLink";

const Subtitle = ({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) => {
  return (
    <p
      className={cn("text-sm font-medium tracking-widest uppercase", className)}
      {...props}
    >
      {children}
    </p>
  );
};
Subtitle.displayName = "Typography.Subtitle";

const Highlight = ({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) => {
  return (
    <span
      className={cn(
        "bg-primary/10 text-primary rounded px-1 py-0.5",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
Highlight.displayName = "Typography.Highlight";

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  P,
  Lead,
  Large,
  Small,
  Subtle,
  Blockquote,
  Code,
  List,
  InlineLink,
  Subtitle,
  Highlight,
};
