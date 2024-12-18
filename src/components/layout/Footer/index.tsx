import { NavLink } from "react-router-dom";
import { footerLinks } from "./constant";

const Footer = () => {
  return (
    <footer className="full-width content-grid bg-primary-500 font-circularStd text-white ~space-y-[2.75rem]/[6.25rem] ~py-[4rem]/[6.25rem]">
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
        {footerLinks.map(({ heading, links }) => (
          <div key={heading} className="space-y-5 font-circularStd">
            <h3 className="text-lg font-black uppercase">{heading}</h3>

            <ul className="space-y-5">
              {links.map(({ name, link }) => {
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
                    <NavLink to={link}>{name}</NavLink>
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
