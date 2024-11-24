import { DotHeading, TeamCard } from "@/components";
import { teamData } from "./constants";

const OurTeamSection = () => {
  return (
    <section className="space-y-12 py-[7.5rem]">
      <DotHeading title="our team" variant="primary" />

      <div>
        <header className="space-y-2 max-lg:text-center">
          <h3 className="font-circularStd font-bold text-black ~text-xl/3xl">
            Meet Our Dedicated Team
          </h3>

          <p className="text-grey ~text-sm/lg">
            a passionate group dedicated to sustainable agriculture and a
            greener future.
          </p>
        </header>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-10 lg:justify-between">
        {teamData.map((team) => (
          <TeamCard key={team.id} {...team} />
        ))}
      </div>
    </section>
  );
};
export default OurTeamSection;
