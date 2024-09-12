import { ButtonLink, SectionHeading } from "@/components";

const HeadlineSection = () => {
  return (
    <section className="mt-28 py-20">
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

      <div className="mt-14 flex size-full max-h-[32.625rem] items-start justify-between gap-8">
        <figure className="size-full min-w-[50rem] bg-yellow-500"></figure>

        <div className="flex size-full flex-col items-start justify-between">
          <div className="space-y-10 font-circularStd">
            <div className="flex items-center justify-start gap-6">
              <div className="size-12 rounded-full bg-primary-500"></div>
              <p className="text-xl font-medium text-black/70">
                Adefaramade Petunia
              </p>

              <p className="ml-auto italic text-grey">5 mins read</p>
            </div>

            <div className="space-y-5">
              <h3 className="text-3xl font-bold tracking-[0.05625rem]">
                Success Stories: Real Impact of EazyReach Initiatives
              </h3>

              <p className="text-lg leading-[1.875rem] text-grey">
                Sollicitudin auctor congue gravida metus dui diam placerat
                consectetur. Magna mauris maecenas id elementum scelerisque.
                Nibh in mauris neque in congue in. Laoreet quam sed elit morbi
                suscipit risus. Lectus odio sollicitudi
              </p>
            </div>
          </div>

          <ButtonLink
            variant={"secondary-round"}
            className="mt-auto gap-5 px-12 py-5"
          >
            Read Now <span> →</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
export default HeadlineSection;
