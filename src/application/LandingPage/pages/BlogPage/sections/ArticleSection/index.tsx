import { ArticleCard, DotHeading } from "@/components";
import { allArticles } from "./constants";

const ArticleSection = () => {
  return (
    <section className="space-y-12 py-28">
      <DotHeading title="all articles" variant="secondary" />

      <div className="flex flex-wrap items-start justify-between gap-x-16 gap-y-20 max-lg:justify-center">
        {allArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};
export default ArticleSection;
