import { cn } from "@/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex font-mono items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-green-400 text-green-900 hover:bg-green-400/90",
        green: "bg-green-400 text-green-900 hover:bg-green-400/90",
        blue: "bg-blue-200 text-blue-900 hover:bg-blue-200/90",
        brown: "bg-brown-400 text-brown-900 hover:bg-brown-400/90",
        purple: "bg-purple-400 text-purple-900 hover:bg-purple-400/90",
        white: "bg-white text-purple-900 hover:bg-white/90",
        "dark-blue": "bg-blue-900 text-white hover:bg-blue-900/90",
        "dark-green": "bg-green-900 text-white hover:bg-green-900/90",
        outline: "border border-input hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
