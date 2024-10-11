import { ButtonLink } from "@/components";

const SubscribeSection = () => {
  return (
    <section className="full-width content-grid bg-primary-500 py-[5.5rem] text-white">
      <div className="flex flex-col items-center justify-center gap-2.5 text-center font-circularStd">
        <h3 className="~text-xl/3xl font-bold">SUBSCRIBE TO OUR NEWSLETTER</h3>
        <p className="~text-[1rem]/[1.375rem] max-w-[62.5rem] max-lg:mt-8">
          Be the first to know about the latest updates, initiatives, and
          opportunities. Subscribe to our newsletter and join a community
          dedicated to empowering Nigerians through data, resources, and
          connections.
        </p>

        <div className="mt-16 flex items-center justify-center">
          {/* STYLE LATER */}
          <input
            type="text"
            className="-mr-8 rounded-2xl bg-white/20 py-6 pl-3.5 pr-12 font-raleway placeholder:text-white"
            placeholder="Enter your email address"
          />

          <ButtonLink
            variant={"secondary-round"}
            className="~px-8/12 ~text-base/xl rounded-2xl py-6 font-medium"
          >
            Subscribe
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
export default SubscribeSection;
