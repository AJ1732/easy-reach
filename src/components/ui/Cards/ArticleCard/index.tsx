import { ArticleCardProps } from "@/types/card/articlecard";

const ArticleCard: React.FC<ArticleCardProps> = ({
  src,
  title,
  content,
  author,
  avatar,
  readMins,
}) => {
  return (
    <article className="~max-w-[20rem]/[22.5rem] space-y-6">
      <figure className="h-60 w-full bg-secondary-op">
        <img src={src} alt="Image alt text" />
      </figure>

      <div className="space-y-2.5 font-raleway">
        <h3 className="text-xl font-bold tracking-[0.035rem] text-dark">
          {title || "Title Placeholder"}
        </h3>

        <p className="text-justify text-sm font-medium leading-5 tracking-wide text-grey">
          {content ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque delectus animi neque possimus corporis, blanditiis ab rem dolorum quia."}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 font-circularStd">
        <figure className="size-10 rounded-full bg-secondary-op">
          <img src={avatar} alt="avatar" className="text-sm" />
        </figure>

        <h4 className="mr-auto font-medium text-black/70">
          {author || "Author Placeholder"}
        </h4>

        <p className="text-sm font-light italic text-grey">
          {readMins || "5 mins read"}
        </p>
      </div>
    </article>
  );
};
export default ArticleCard;
