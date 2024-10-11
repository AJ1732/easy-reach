import { FeatureCard, SectionHeading } from "@/components";
import { FeatureData } from "@/data";

const FeatureSection = () => {
  return (
    <section className="space-y-[5.45rem] py-[7.5rem]">
      <SectionHeading
        line
        title="features"
        before="before:content-['features']"
        className="sm:max-lg:ml-16"
      />

      <div className="flex flex-wrap items-start justify-between sm:max-lg:justify-center gap-y-16 gap-x-4">
        {FeatureData.map(({ id, icon, title, content }) => (
          <FeatureCard key={id} icon={icon} title={title} content={content} />
        ))}
      </div>
    </section>
  );
};
export default FeatureSection;
