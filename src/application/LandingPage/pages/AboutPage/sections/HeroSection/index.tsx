import { ButtonLink } from "@/components";
import { ArrowRight } from "@/components/svgs";
import heroImage from "@/assets/images/eazy-hero-image.jpeg";

const HeroSection = () => {
  return (
    <section className="full-width content-grid h-[64rem] overflow-hidden bg-secondary-500">
      <div className="full-width relative flex items-start justify-between">
        {/* HERO CONTENT */}
        <div className="z-[2] flex size-full justify-center pl-4 pr-4 pt-32 lg:justify-end lg:bg-white lg:pr-12">
          <div className="flex w-full flex-col items-center gap-[6.25rem] max-lg:bg-black/60 lg:w-[37.825rem] lg:items-start">
            <div className="mx-auto mt-40 space-y-8 max-lg:max-w-md max-lg:text-center max-sm:max-w-80 sm:max-lg:mt-48 lg:space-y-5">
              <p className="~text-[1.25rem]/[1.75rem] font-circularStd font-normal max-lg:text-white/60">
                Welcome to EazyReach
              </p>

              <h2 className="font-magnivera text-4xl font-medium text-white sm:text-5xl lg:text-[4.875rem] lg:leading-[5rem] lg:text-black">
                Where resources <br className="lg:hidden" /> meet opportunity
              </h2>

              <p className="~text-base/xl font-euclid text-white/60 max-lg:!mt-5 lg:text-grey">
                A revolutionary platform designed to empower citizens, reduce
                poverty, and tackle youth unemployment in Nigeria.
              </p>
            </div>

            <ButtonLink
              variant={"primary-round"}
              className="~px-10/20 ~py-4/6 ~text-[1.25rem]/[1.375rem] font-euclid font-medium"
            >
              <span>Get started</span>
              <ArrowRight className="active:scale-[0.98]" />
            </ButtonLink>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="absolute mt-32 flex size-full w-full justify-start transition-all duration-1000 ease-in-out max-lg:px-4 lg:relative">
          <figure className="w-full bg-primary-600 lg:max-w-[37rem]">
            <img
              src={heroImage}
              className="size-full object-cover"
              alt="Three female children smiling happily and in traditional attire"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
