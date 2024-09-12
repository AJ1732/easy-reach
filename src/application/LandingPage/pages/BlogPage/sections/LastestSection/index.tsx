import { ArticleCard, DotHeading } from "@/components";

const LatestSection = () => {
  return (
    <section className="mt-16 space-y-12 py-[6.25rem]">
      <DotHeading title="our lastest articles" variant="secondary" />
      <div className="flex flex-wrap items-start justify-between gap-24">
        {[1, 2, 3].map((item) => (
          <ArticleCard key={item} />
        ))}
      </div>
    </section>
  );
};
export default LatestSection;
