import { ButtonLink, SectionHeading } from "@/components";
import aboutUsImage from "@/assets/images/eazy-about-us-image.jpeg";

const AboutSection = () => {
  return (
    <section className="full-width content-grid size-full  py-32">
      <div className="flex items-center justify-start gap-20">
        <figure className="h-[43.1875rem] w-[34.3125rem] bg-primary-600">
          <img
            src={aboutUsImage}
            className="size-full object-cover"
            alt="Three female children smiling happily and in traditional attire"
          />
        </figure>

        <article className="max-w-xl">
          <SectionHeading
            line
            title="About Us"
            before="before:content-['about_us']"
          />

          <p className="mt-4 font-euclid text-[1.375rem] leading-[2.7rem] text-grey">
            At EazyReach, we believe that everyone deserves equal access to
            resources, opportunities, and information. Our platform is designed
            to bridge the gap between citizens, organizations, and governments,
            providing a seamless connection to the resources and support needed
            to overcome challenges and achieve success. With a focus on
            data-driven solutions and community empowerment, we aim to create a
            more just, equitable, and prosperous society for all.
          </p>

          <ButtonLink className="mt-[4.3rem] px-10 py-5 font-raleway text-xl font-bold">
            Learn more
          </ButtonLink>
        </article>
      </div>
    </section>
  );
};
export default AboutSection;
