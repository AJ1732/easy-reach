import { buttonVariants } from "@/components/ui/ButtonLink";
import { type VariantProps } from "class-variance-authority";

export interface ButtonLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: string | React.ReactNode;
  type?: "button" | "submit";
  link?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}
