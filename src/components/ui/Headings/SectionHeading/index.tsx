import { cn } from "@/utils/cn";
import { SectionHeadingProps } from "@/types/headings";

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  line,
  before,
  className,
}) => {
  return (
    <h2
      className={cn(
        `~text-[2rem]/[2.8125rem] before:~text-[4.5rem]/[5.625rem] relative flex items-center overflow-hidden whitespace-nowrap font-raleway font-extrabold uppercase before:absolute before:-z-[1] before:text-[rgba(0,_0,_0,_0.03)] ${
          line ? "gap-4 before:left-6" : "before:-top-9 before:left-3"
        }`,
        before,
        className,
      )}
    >
      {line && <div className="h-20 w-1.5 bg-primary-600"></div>}
      {title || "placeholder"}
    </h2>
  );
};
export default SectionHeading;
