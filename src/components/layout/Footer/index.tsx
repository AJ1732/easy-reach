import { footerLinks } from "./constant";

const Footer = () => {
  return (
    <footer className="full-width content-grid space-y-[6.25rem] bg-primary-500 py-[6.25rem] font-circularStd text-white">
      <div className="flex flex-wrap items-start justify-between">
        {footerLinks.map(({ heading, links }) => (
          <div key={heading} className="space-y-5 font-circularStd">
            <h3 className="text-lg font-black uppercase">{heading}</h3>

            <ul className="space-y-5">
              {links.map(({ name }) => {
                if (heading === "socials") {
                  return (
                    <li key={name} className="mx-2 inline-block first:ml-0">
                      <i className={`${name} text-3xl`}></i>
                    </li>
                  );
                }
                return (
                  <li
                    key={name}
                    className="text-xl font-normal first-letter:capitalize"
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <hr />

      <p className="text-center text-xl font-normal">
        &copy; 2024, EazyReach. All Rights Reserved.
      </p>
    </footer>
  );
};
export default Footer;
