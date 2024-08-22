import { TeamCardProps } from "@/types/card/teamcard";

const TeamCard: React.FC<TeamCardProps> = ({ src, fullName, position }) => {
  return (
    <article className="space-y-7 max-w-[16.35rem]">
      <figure className="w-[16.35rem] bg-secondary-op h-96">
        <img src={src} alt="Image alt text" />
      </figure>

      <div>
        <h3 className="leading-[2.75rem] text-[1.45rem] font-medium font-circularStd">
          {fullName ? fullName : "Full Name Placeholder"}{" "}
        </h3>
        <p className="text-xl font-normal leading-10">
          {position ? position : "PP, Position Placeholder"}
        </p>
      </div>
    </article>
  );
};
export default TeamCard;
