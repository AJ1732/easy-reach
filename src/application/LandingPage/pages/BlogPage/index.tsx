import { ArticleSection, HeadlineSection, LastestSection, SubscribeSection } from "./sections";

const BlogPage = () => {
  return (
    <div className="full-width content-grid min-h-dvh">
      <HeadlineSection />
      <LastestSection />
      <SubscribeSection />
      <ArticleSection />
    </div>
  );
};
export default BlogPage;
