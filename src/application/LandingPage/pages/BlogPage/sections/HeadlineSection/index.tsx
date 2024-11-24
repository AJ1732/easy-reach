import { ButtonLink, SectionHeading } from "@/components";
import { ArrowRight } from "@/components/svgs";
import { assetLib } from "@/lib/assets";

const HeadlineSection = () => {
  return (
    <section className="mt-28 pt-20">
      <header className="space-y-6">
        <SectionHeading
          title="our fresh articles"
          before="before:content-['our_articles']"
        />

        <p className="max-w-[50rem] text-grey ~text-[1.125rem]/[1.375rem]">
          Natoque nunc sit diam volutpat nulla faucibus risus in pellentesque.
          Sed diam sagittis non arcu. Consectetur enim lobortis.
        </p>
      </header>

      <div className="mt-14 grid w-full gap-8 lg:grid-cols-[1fr,_26.8125rem]">
        <figure className="size-full max-h-[32.625rem] bg-yellow-500">
          <img
            src={assetLib.articleHeadlineImage}
            alt={"a woman selling tomatoes and pepper"}
            className="size-full object-cover"
          />
        </figure>

        <div className="flex flex-col items-start justify-between gap-8">
          <div className="space-y-10 font-circularStd">
            <div className="flex items-center justify-start ~gap-4/6">
              <figure className="size-12 overflow-hidden rounded-full bg-primary-500">
                <img
                  src={assetLib.petuniaProfileImage}
                  alt="petunia profile image"
                  className="-mt-3 object-cover"
                />
              </figure>

              <p className="font-medium text-black/70 ~text-sm/xl">
                Adefaramade Petunia
              </p>

              <p className="ml-auto italic text-grey ~text-sm/base">
                5 mins read
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="font-bold tracking-[0.05625rem] ~text-2xl/3xl">
                Success Stories: Real Impact of EazyReach Initiatives
              </h3>

              <p className="leading-[1.875rem] text-grey ~text-base/lg">
                Sollicitudin auctor congue gravida metus dui diam placerat
                consectetur. Magna mauris maecenas id elementum scelerisque.
                Nibh in mauris neque in congue in. Laoreet quam sed elit morbi
                suscipit risus. Lectus odio sollicitudi
              </p>
            </div>
          </div>

          <ButtonLink
            variant={"secondary-round"}
            className="mt-auto gap-5 px-12 py-5 text-lg"
          >
            Read more <ArrowRight className="size-[1.7rem]" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
export default HeadlineSection;
