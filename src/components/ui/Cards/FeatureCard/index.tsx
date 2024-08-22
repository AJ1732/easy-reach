import { FeatureCardProps } from "@/types/card/featurecard";

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content }) => {
  return (
    <article className="max-w-[32.4375rem] space-y-2 font-raleway">
      <header className="space-y-8">
        <div className="flex size-14 items-center justify-center rounded-full bg-secondary-op">
          {icon || <div className="size-6 bg-black"></div>}
        </div>

        <h3 className="text-[1.625rem] font-bold tracking-wider text-dark">
          {title || "Title Placeholder"}
        </h3>
      </header>

      <p className="text-justify text-base font-medium leading-[1.5625rem] tracking-wide text-grey">
        {content ||
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos earum fuga provident impedit pariatur dolore corporis temporibus rem molestiae."}
      </p>
    </article>
  );
};
export default FeatureCard;
