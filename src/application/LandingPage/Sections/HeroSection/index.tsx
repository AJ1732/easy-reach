import heroImage from "@/assets/images/eazy-hero-image.jpeg";
import { ButtonLink } from "@/components";
import { ArrowRight } from "@/components/svgs";

const HeroSection = () => {
  return (
    <section className="full-width content-grid h-[64rem] overflow-hidden bg-secondary-500">
      <div className="full-width flex items-start justify-between">
        <div className="flex size-full justify-end bg-white pr-12 pt-32">
          <div className="flex w-[35.625rem] flex-col items-start gap-[6.25rem]">
            <div className="mt-40 space-y-5">
              <p className="font-circularStd text-[1.75rem] font-normal">
                Welcome to EazyReach
              </p>

              <h2 className="font-magnivera text-[4.875rem] font-medium leading-[5rem] text-black">
                Where resources meet opportunity
              </h2>

              <p className="font-euclid text-xl text-grey">
                A revolutionary platform designed to empower citizens, reduce
                poverty, and tackle youth unemployment in Nigeria.
              </p>
            </div>

            <ButtonLink
              variant={"primary-round"}
              className="px-20 py-6 font-euclid text-[1.375rem] font-medium"
            >
              <span>Get started</span>
              <ArrowRight className="active:scale-[0.98]" />
            </ButtonLink>
          </div>
        </div>

        <div className="mt-32 flex size-full justify-start">
          <div className="w-[37rem] bg-green-500">
            <img
              src={heroImage}
              className="size-full object-cover"
              alt="Three female children smiling happily and in traditional attire"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
