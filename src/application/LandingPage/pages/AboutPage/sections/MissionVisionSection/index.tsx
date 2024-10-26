import tractorImage from "@/assets/images/tractor.jpeg";
import { DotHeading } from "@/components";

const MissionVisionSection = () => {
  return (
    <section className="space-y-40 py-10">
      {/* OUR MISSION */}
      <article className="flex items-start justify-between max-lg:flex-col-reverse max-lg:gap-10">
        <div className="max-w-[38.3125rem]">
          <DotHeading title="our mission" variant="primary" />
          <p className="mt-8 font-circularStd text-lg leading-[200%] text-grey">
            <strong className="text-black">
              Our mission at EazyReach is to empower communities through
              strategic connections
            </strong>
            , leveraging our platform to bridge citizens with essential
            resources, valuable insights, and life-changing opportunities. By
            fostering collaboration and inclusivity, we aim to cultivate a
            society where every individual, regardless of background or
            circumstance, can access the support they need to thrive and
            succeed. Through our concerted efforts, we aspire to contribute to
            the creation of a more equitable and prosperous society for all.
          </p>
        </div>

        <figure className="max-w-[31.25rem] rounded-2xl">
          <img
            src={tractorImage}
            className="size-full rounded-2xl object-cover"
            alt="Tractor tending the field"
          />
        </figure>
      </article>

      {/* OUR VISION */}
      <article className="flex flex-row-reverse items-start justify-between max-lg:flex-col-reverse max-lg:gap-10">
        <div className="max-w-[38.3125rem]">
          <DotHeading title="our vision" variant="secondary" />
          <p className="mt-8 font-circularStd text-lg leading-[200%] text-grey">
            <strong className="text-black">
              We envision a future where every person has unfettered access to
              the resources
            </strong>
            required for personal and collective advancement. We see a world
            where data-driven solutions play a pivotal role in addressing
            societal challenges and driving positive change. We strive to be at
            the forefront of this transformation, pioneering innovative
            approaches that harness the power of information to catalyse social
            impact and foster inclusive growth. Together, we aspire to build a
            brighter, more sustainable future, where opportunities abound and
            prosperity knows no bounds.
          </p>
        </div>

        <figure className="max-w-[31.25rem] rounded-2xl">
          <img
            src={tractorImage}
            className="size-full rounded-2xl object-cover"
            alt="Tractor tending the field"
          />
        </figure>
      </article>
    </section>
  );
};
export default MissionVisionSection;
