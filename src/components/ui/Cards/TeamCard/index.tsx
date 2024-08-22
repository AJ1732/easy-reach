import { TeamCardProps } from "@/types/card/teamcard";

const TeamCard: React.FC<TeamCardProps> = ({ src, fullName, position }) => {
  return (
    <article className="max-w-[16.35rem] space-y-7">
      <figure className="h-96 w-[16.35rem] bg-secondary-op">
        <img src={src} alt="Image alt text" />
      </figure>

      <div>
        <h3 className="font-circularStd text-[1.45rem] font-medium leading-[2.75rem]">
          {fullName || "Full Name Placeholder"}{" "}
        </h3>
        <p className="text-xl font-normal leading-10">
          {position || "PP, Position Placeholder"}
        </p>
      </div>
    </article>
  );
};
export default TeamCard;
