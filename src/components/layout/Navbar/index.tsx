import { ButtonLink } from "@/components";
import { cn } from "@/utils/cn";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "about",
      link: "/about",
    },
    {
      name: "blog",
      link: "/blog",
    },
  ];
  return (
    <header className="full-width content-grid fixed w-full py-8">
      <nav className="itce flex items-center justify-between">
        <h1 className="bg-primary-500 px-14 py-4 text-lg font-medium uppercase text-white">
          LOGO
        </h1>

        <div className="flex items-center justify-end gap-20">
          <ul className="flex items-center justify-center gap-[3.75rem] p-2.5">
            {navlink.map(({ name, link }) => (
              <li
                key={name}
                className="font-circularStd text-sm font-medium uppercase tracking-wide text-white"
              >
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    cn(
                      `relative flex items-center justify-center p-2.5 before:absolute before:bottom-0 before:size-[0.375rem] before:rounded-full`,
                      isActive && "before:bg-white",
                    )
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <ButtonLink className="px-7 py-4 font-euclid text-sm font-semibold uppercase tracking-wide">
            contact us
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
