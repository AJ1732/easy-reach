import { ButtonLink, DotHeading } from "@/components";

const VolunteerSection = () => {
  return (
    <section className="full-width content-grid bg-primary-500 py-20 text-white">
      <div className="~gap-10/20 flex flex-col items-center justify-center text-center font-circularStd">
        <DotHeading
          title="Volunteer Opportunity"
          variant="secondary"
          className="uppercase"
        />

        <article className="max-w-[62.5rem] space-y-3">
          <h3 className="~text-xl/3xl font-bold">
            Help Register Your Community
          </h3>
          <p className="~text-[1rem]/[1.375rem] font-light">
            Volunteer as an agent to help register people in your community.
            Earn an incentive of ₦50,000 for your efforts. Together, we can
            build a more connected and supportive Nigeria.
          </p>
        </article>

        <ButtonLink
          variant={"secondary-round"}
          className="px-10 py-6 font-raleway text-xl font-bold"
        >
          Register as a volunteer
        </ButtonLink>
      </div>
    </section>
  );
};
export default VolunteerSection;
