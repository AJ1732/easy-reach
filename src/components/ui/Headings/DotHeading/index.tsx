import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { DotHeadingProps } from "@/types/headings";

const DotHeading: React.FC<DotHeadingProps> = ({
  title,
  variant,
  className,
}) => {
  return (
    <h3
      className={cn(
        "flex items-center justify-start gap-2 to-black/70 font-circularStd text-xl font-medium uppercase",
        className,
      )}
    >
      <span className={cn(dotVariants({ variant, className }))} /> {title}
    </h3>
  );
};

export default DotHeading;

export const dotVariants = cva("size-2.5 block rounded-full", {
  variants: {
    variant: {
      primary: ["bg-primary-500"],
      secondary: ["bg-secondary-500"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
