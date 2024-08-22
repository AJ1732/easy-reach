import {
  ArticleCard,
  BlogCard,
  ButtonLink,
  DotHeading,
  FeatureCard,
  SectionHeading,
  TeamCard,
} from "@/components";

function App() {
  return (
    <div className="content-grid space-y-8 py-4">
      {/* FONTS */}
      <div className="space-y-2">
        <h2 className="uppercase">Font</h2>
        <div>
          <h3 className="font-magnivera">Hello</h3>
          <h3 className="font-raleway">Hello</h3>
          <h3 className="font-circularStd">Hello</h3>
          <h3 className="font-euclid font-bold">Hello</h3>
          <h3 className="font-bold">Hello</h3>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="space-y-2">
        <h2 className="uppercase">Buttons</h2>
        <div className="flex gap-4">
          <ButtonLink>Button</ButtonLink>
          <ButtonLink variant={"primary-round"}>Button</ButtonLink>
          <ButtonLink variant={"secondary"}>Button</ButtonLink>
          <ButtonLink variant={"secondary-round"}>Button</ButtonLink>
        </div>
      </div>

      {/* LINKS */}
      <div className="space-y-2">
        <h2 className="uppercase">Links</h2>

        <div className="flex gap-4">
          <ButtonLink link="/about">Link</ButtonLink>
          <ButtonLink link="/" variant={"primary-round"}>
            Link
          </ButtonLink>
          <ButtonLink link="/" variant={"secondary"}>
            Link
          </ButtonLink>
          <ButtonLink link="/" variant={"secondary-round"}>
            Link
          </ButtonLink>
        </div>
      </div>

      {/* CARDS */}
      <div className="space-y-2">
        <h2 className="uppercase">Cards</h2>

        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <h4>FeatureCard</h4>
            <FeatureCard />
          </div>

          <div className="space-y-2">
            <h4>Blog Card</h4>
            <BlogCard />
          </div>

          <div className="space-y-2">
            <h4>Team Card</h4>
            <TeamCard />
          </div>

          <div className="space-y-2">
            <h4>Article Card</h4>
            <ArticleCard />
          </div>
        </div>
      </div>

      {/* HEADING */}
      <div className="space-y-2">
        <div className="space-y-2">
          <h4>Section Headings</h4>

          <div>
            <SectionHeading title="abou" before="before:content-['about']" />
            <SectionHeading
              title="our fresh articles"
              before="before:content-['our_fresh_articles']"
            />

            <SectionHeading
              title="about us"
              line
              before="before:content-['about_us']"
            />
            <SectionHeading
              title="features "
              line
              before="before:content-['features']"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h4>Dot Headings</h4>

          <div>
            <DotHeading title="mission" variant="primary" />
            <DotHeading title="vission" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
