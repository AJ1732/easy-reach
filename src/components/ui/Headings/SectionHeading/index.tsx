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
        `relative uppercase text-[2.8125rem] flex items-center font-extrabold font-raleway before:absolute  before:text-[rgba(0,_0,_0,_0.03)] before:-z-[1] before:text-[5.625rem] ${
          line ? " gap-4 before:left-6" : "before:left-3 before:-top-9"
        }`,
        before,
        className
      )}
    >
      {line && <div className="bg-primary-600 w-1.5 h-20"></div>}
      {title || "placeholder"}
    </h2>
  );
};
export default SectionHeading;
