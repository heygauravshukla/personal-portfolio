"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      className={className}
      onClick={() => router.back()}
      aria-label="Go back"
    >
      <ArrowLeftIcon className="mr-2 size-4" />
      Back
    </Button>
  );
}
