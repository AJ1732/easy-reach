import { contactData } from "./constant";

const ContactSection = () => {
  return (
    <section className="~pb-32/56 ~pt-20/40">
      <div className="flex items-start justify-between ~gap-16/0 max-md:flex-col">
        <div className="~space-y-8/16 max-w-[30rem] font-circularStd">
          {contactData.map(({ title, iconClass, text }) => (
            <div key={title} className="flex items-center justify-start gap-7">
              <div className="flex min-h-[3.125rem] min-w-[3.125rem] items-center justify-center rounded-full bg-primary-500">
                <i className={iconClass}></i>
              </div>

              <div className="~space-y-0.5/3 text-black/80">
                <h4 className="uppercase">{title}</h4>
                <p className="~text-lg/2xl font-medium">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="w-full max-w-[34.5rem] space-y-12">
          <div className="flex flex-col gap-5">
            <label
              htmlFor="email"
              className="font-circularStd uppercase text-black/80"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="rounded-lg border-[0.5px] border-[rgba(12,_12,_12,_0.60)] bg-[#F1F1F1] px-3 py-4"
            />
          </div>

          <div className="flex flex-col gap-5">
            <label
              htmlFor="message"
              className="font-circularStd uppercase text-black/80"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={10}
              name="message"
              className="rounded-lg border-[0.5px] border-[rgba(12,_12,_12,_0.60)] bg-[#F1F1F1] px-3 py-4"
            ></textarea>
          </div>

          <button className="w-full bg-primary-500 py-6 uppercase text-white">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactSection;
