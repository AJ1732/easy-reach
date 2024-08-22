import { FeatureCardProps } from "@/types/card/featurecard";

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content }) => {
  return (
    <article className="space-y-2 max-w-[32.4375rem]">
      <header className="space-y-8">
        <div className="size-14 bg-secondary-op rounded-full flex justify-center items-center">
          {icon ? icon : <div className="size-6 bg-black"></div>}
        </div>
        
        <h3 className="font-raleway font-bold text-dark text-[1.625rem]">
          {title ? title : "Title Placeholder"}
        </h3>
      </header>

      <p className="font-medium text-base text-grey leading-[1.5625rem]">
        {content
          ? content
          : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos earum fuga provident impedit pariatur dolore corporis temporibus rem molestiae."}
      </p>
    </article>
  );
};
export default FeatureCard;
