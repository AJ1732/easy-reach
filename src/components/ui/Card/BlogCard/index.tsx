import { BlogCardProps } from "@/types/card/blogcard";

const BlogCard: React.FC<BlogCardProps> = ({ src, title, content }) => {
  return (
    <article className="space-y-6 font-raleway max-w-[22.45rem]">
      <figure className="w-[22.45rem] bg-secondary-op h-60">
        <img src={src} alt="Image alt text" />
      </figure>

      <div className="*:leading-5 *:tracking-wide space-y-2.5">
        <h3 className="text-dark text-xl font-bold ">
          {title ? title : "Title Placeholder"}
        </h3>

        <p className="font-medium text-sm text-grey text-justify">
          {content
            ? content
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur excepturi harum et perspiciatis esse at hic facere earum modi."}
        </p>
      </div>
    </article>
  );
};
export default BlogCard;
