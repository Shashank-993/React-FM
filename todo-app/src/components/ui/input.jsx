import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg",
        "border border-input",
        "bg-transparent",
        "px-2.5 py-1",
        "text-base md:text-sm",
        "text-[var(--text-primary)]",
        "placeholder:text-[var(--text-placeholder)]",
        "outline-none appearance-none",
        "transition-colors",
        "shadow-none",

        // Remove browser styling
        "focus:bg-transparent",
        "active:bg-transparent",
        "focus-visible:bg-transparent",
        "focus-visible:outline-none",
        "focus-visible:ring-0",
        "focus-visible:border-transparent",

        // Disabled
        "disabled:pointer-events-none",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",

        // File input
        "file:border-0",
        "file:bg-transparent",
        "file:text-sm",
        "file:font-medium",

        // Invalid
        "aria-invalid:border-destructive",
        "aria-invalid:ring-0",

        className,
      )}
      {...props}
    />
  );
}

export { Input };
