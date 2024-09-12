import { HeadlineSection, LastestSection, SubscribeSection } from "./sections";

const BlogPage = () => {
  return (
    <div className="full-width content-grid min-h-dvh">
      <HeadlineSection />
      <LastestSection />
      <SubscribeSection />
    </div>
  );
};
export default BlogPage;
