import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { ButtonLinkProps } from "@/types/buttonlink";

const ButtonLink: React.FC<ButtonLinkProps> = ({
  type,
  link,
  disabled,
  children,
  className,
  variant,
  onClick,
}) => {
  if (link) {
    return (
      <Link
        to={link}
        className={cn(buttonVariants({ variant, className }))}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(buttonVariants({ variant, className }))}
    >
      {children}
    </button>
  );
};
export default ButtonLink;

export const buttonVariants = cva(
  "flex items-center text-white justify-center gap-5 px-4 py-3 whitespace-nowrap text-sm font-medium font-euclid ring-offset-white focus-visible:outline-none focus-visible:ring-2 rounded-sm leading-none focus-visible:ring-neutral-100 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 active:scale-[0.99]",
  {
    variants: {
      variant: {
        primary: ["bg-primary-500"],
        secondary: ["bg-secondary-500"],
        "primary-round": ["bg-primary-500", "rounded-full"],
        "secondary-round": ["bg-secondary-500", "rounded-full"],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
