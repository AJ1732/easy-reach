import { ArticleCard, DotHeading } from "@/components";

const ArticleSection = () => {
  return (
    <section className="space-y-12 py-28">
      <DotHeading title="all articles" variant="secondary" />

      <div className="flex flex-wrap items-start justify-between gap-20">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ArticleCard key={item} />
        ))}
      </div>
    </section>
  );
};
export default ArticleSection;
