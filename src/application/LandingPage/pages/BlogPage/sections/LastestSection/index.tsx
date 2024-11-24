import { ArticleCard, DotHeading } from "@/components";
import { latestArticles } from "./constants";

const LatestSection = () => {
  return (
    <section className="space-y-12 py-[6.25rem]">
      <DotHeading title="our lastest articles" variant="secondary" />
      <div className="flex flex-wrap items-start justify-between gap-20 max-xl:justify-center">
        {latestArticles.map((latestArticle) => (
          <ArticleCard key={latestArticle.id} {...latestArticle} />
        ))}
      </div>
    </section>
  );
};
export default LatestSection;
