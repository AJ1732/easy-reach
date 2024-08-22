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
        "flex justify-start gap-2 items-center font-medium font-circularStd uppercase to-black/70 text-xl",
        className
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
