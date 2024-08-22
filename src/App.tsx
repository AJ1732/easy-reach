import { BlogCard, ButtonLink, FeatureCard } from "@/components";

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
        </div>
      </div>
    </div>
  );
}

export default App;
