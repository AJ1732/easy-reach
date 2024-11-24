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
    <article className="space-y-6 ~max-w-[20rem]/[22.5rem]">
      <figure className="h-60 w-full overflow-hidden bg-secondary-op">
        <img
          src={src}
          alt="Image alt text"
          className="size-full object-cover"
        />
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
        <figure className="size-10 overflow-hidden rounded-full bg-secondary-op">
          <img src={avatar} alt="avatar" className="-mt-2 text-sm" />
        </figure>

        <h4 className="mr-auto font-medium text-black/70">
          {author || "Author Placeholder"}
        </h4>

        <p className="text-sm font-light italic text-grey">
          {`${readMins || 5} mins read`}
        </p>
      </div>
    </article>
  );
};
export default ArticleCard;
