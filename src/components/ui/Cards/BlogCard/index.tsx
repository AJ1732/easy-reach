import { BlogCardProps } from "@/types/card/blogcard";

const BlogCard: React.FC<BlogCardProps> = ({ src, title, content }) => {
  return (
    <article className="max-w-[22.45rem] space-y-6 font-raleway">
      <figure className="h-60 w-[22.45rem] bg-secondary-op">
        <img src={src} alt="Image alt text" />
      </figure>

      <div className="space-y-2.5 *:leading-5 *:tracking-wide">
        <h3 className="text-xl font-bold text-dark">
          {title || "Title Placeholder"}
        </h3>

        <p className="text-justify text-sm font-medium text-grey">
          {content ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur excepturi harum et perspiciatis esse at hic facere earum modi."}
        </p>
      </div>
    </article>
  );
};
export default BlogCard;
