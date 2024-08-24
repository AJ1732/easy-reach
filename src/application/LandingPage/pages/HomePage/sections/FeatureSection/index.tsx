import { FeatureCard, SectionHeading } from "@/components";

const FeatureSection = () => {
  return (
    <section className="space-y-[5.45rem] py-[7.5rem]">
      <SectionHeading
        line
        title="features"
        before="before:content-['features']"
      />

      <div className="flex flex-wrap items-center justify-between gap-16">
        {[1, 2, 3, 4].map((item) => (
          <FeatureCard key={item} />
        ))}
      </div>
    </section>
  );
};
export default FeatureSection;
