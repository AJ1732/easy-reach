import { SectionHeading } from "@/components";

const BlogPage = () => {
  return (
    <div className="full-width content-grid min-h-dvh">
      <div className="mt-28 py-20">
        <header className="space-y-6">
          <SectionHeading
            title="our fresh articles"
            before="before:content-['our_articles']"
          />

          <p className="max-w-[50rem] text-[1.375rem] text-grey">
            Natoque nunc sit diam volutpat nulla faucibus risus in pellentesque.
            Sed diam sagittis non arcu. Consectetur enim lobortis.
          </p>
        </header>

        <div className="mt-14">BlogPage</div>
      </div>
    </div>
  );
};
export default BlogPage;
