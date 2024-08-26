import { ButtonLink, DotHeading } from "@/components";

const VolunteerSection = () => {
  return (
    <section className="full-width content-grid bg-primary-500 py-20 text-white">
      <div className="flex flex-col items-center justify-center gap-20 text-center font-circularStd">
        <DotHeading
          title="Volunteer Opportunity"
          variant="secondary"
          className="uppercase"
        />

        <article className="max-w-[62.5rem] space-y-3">
          <h3 className="text-3xl font-bold">Help Register Your Community</h3>
          <p className="text-[1.375rem]">
            Volunteer as an agent to help register people in your community.
            Earn an incentive of ₦50,000 for your efforts. Together, we can
            build a more connected and supportive Nigeria.
          </p>
        </article>

        <ButtonLink
          variant={"secondary-round"}
          className="px-10 py-6 text-xl font-bold font-raleway"
        >
          Register as a volunteer
        </ButtonLink>
      </div>
    </section>
  );
};
export default VolunteerSection;
