import { ButtonLink } from "@/components";

const SubscribeSection = () => {
  return (
    <section className="full-width content-grid bg-primary-500 py-[5.5rem] text-white">
      <div className="flex flex-col items-center justify-center gap-2.5 text-center font-circularStd">
        <h3 className="text-3xl font-bold">SUBSCRIBE TO OUR NEWSLETTER</h3>
        <p className="max-w-[62.5rem] text-[1.375rem]">
          Be the first to know about the latest updates, initiatives, and
          opportunities. Subscribe to our newsletter and join a community
          dedicated to empowering Nigerians through data, resources, and
          connections.
        </p>

        <div className="mt-16 flex items-center justify-center gap-4">
          {/* STYLE LATER */}
          <input type="text" className="" />

          <ButtonLink
            variant={"secondary-round"}
            className="px-12 py-6 text-xl font-medium"
          >
            Subscribe
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
export default SubscribeSection;
