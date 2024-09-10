import { DotHeading, TeamCard } from "@/components";

const OurTeamSection = () => {
  return (
    <section className="space-y-12 py-[7.5rem]">
      <DotHeading title="our team" variant="primary" />

      <div>
        <header className="space-y-2">
          <h3 className="font-circularStd text-3xl font-bold text-black">
            Meet Our Dedicated Team
          </h3>

          <p className="text-lg text-grey">
            a passionate group dedicated to sustainable agriculture and a
            greener future.
          </p>
        </header>
      </div>

      <div className="flex items-start justify-between">
        {teamData.map((item) => (
          <TeamCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default OurTeamSection;

const teamData = [
  { id: 1, fullName: "Mustapha Kayode", position: "CEO" },
  {
    id: 2,
    fullName: "Mustapha Babatunde",
    position: "Head, HR and Production",
  },
  { id: 3, fullName: "Olabode Akeem", position: "Head, Sales and Marketing" },
  { id: 4, fullName: "Orobisi Michael", position: "Head, IT and Finance" },
];
