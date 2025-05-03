"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import Wrapper from "@/components/wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

const links: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "mailto:heygauravshukla@gmail.com" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background/90 @container sticky top-0 z-5 border-b backdrop-blur-lg">
      <Wrapper as="nav" className="flex h-16 items-center justify-between">
        <Link href="/">
          <Avatar>
            <AvatarImage src="/gaurav-shukla.webp" alt="Gaurav Shukla" />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-muted-foreground hover:text-primary lowercase transition-colors",
                    {
                      "text-primary": pathname === link.href,
                    },
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu />
                <span className="sr-only">Open navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation links</SheetTitle>
                <SheetDescription>
                  Browse through the links below to navigate
                </SheetDescription>
              </SheetHeader>
              <ul className="grid gap-2 px-4 py-8">
                {links.map((link) => {
                  return (
                    <li key={link.label}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className={cn("text-muted-foreground", {
                            "text-primary": pathname === link.href,
                          })}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </Wrapper>
    </header>
  );
}
