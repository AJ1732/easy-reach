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
    <article className="max-w-[22.5rem] space-y-6">
      <figure className="w-[22.5rem] bg-secondary-op h-60">
        <img src={src} alt="Image alt text" />
      </figure>

      <div className="font-raleway space-y-2.5">
        <h3 className="text-dark font-bold text-xl tracking-[0.035rem]">
          {title ? title : "Title Placeholder"}
        </h3>

        <p className="text-justify text-grey text-sm font-medium leading-5 tracking-wide">
          {content
            ? content
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque delectus animi neque possimus corporis, blanditiis ab rem dolorum quia."}
        </p>
      </div>

      <div className="flex font-circularStd justify-between items-center gap-4">
        <figure className="size-10 bg-secondary-op rounded-full">
          <img src={avatar} alt="avatar" className="text-sm" />
        </figure>

        <h4 className="text-black/70 font-medium mr-auto">
          {author ? author : "Author Placeholder"}
        </h4>

        <p className="text-sm text-grey font-light italic ">
          {readMins ? readMins : "5 mins read"}
        </p>
      </div>
    </article>
  );
};
export default ArticleCard;
