import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ButtonLink } from "@/components";
import { useNavScrollAnimation } from "@/hooks";
import { cn } from "@/utils/cn";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [openNav, setOpenNav] = useState(false);
  const [navColor] = useNavScrollAnimation();

  return (
    <header className="full-width content-grid fixed z-50 w-full py-8">
      <nav className="flex items-center justify-between">
        <h1 className="bg-primary-500 px-14 py-4 text-lg font-medium uppercase text-white">
          EazyReach
        </h1>

        {/* DESKTOP NAVLINKS */}
        <div className="flex items-center justify-end ~gap-8/20 max-md:hidden">
          <ul className="flex items-center justify-center p-2.5 ~gap-[2.5rem]/[3.75rem]">
            {navlinks.map(({ name, link }) => (
              <li
                key={name}
                className="font-circularStd text-sm font-medium uppercase tracking-wide text-white"
              >
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    cn(
                      `relative flex items-center justify-center p-2.5 transition-colors duration-300 before:absolute before:bottom-0 before:size-[0.375rem] before:rounded-full`,
                      isActive && "before:bg-white",
                      isActive && currentPath === "/blog" && "before:bg-dark",
                      isActive && navColor && "before:bg-secondary-500",
                      currentPath === "/blog" && "text-dark",
                      navColor && "text-secondary-500",
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

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpenNav((prev) => !prev)}
          className="size-8 rounded-md bg-black md:hidden"
        ></button>
      </nav>

      {/* MOBILE VIEW NAVIGATION */}
      <div
        onClick={() => setOpenNav((prev) => !prev)}
        className={cn(
          "full-width content-grid absolute inset-0 -z-[1] min-h-dvh w-full bg-secondary-op/60 transition-all duration-1000 md:hidden",
          !openNav && "!hidden",
        )}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className="mt-32 h-fit bg-white px-6 py-24"
        >
          <ul className="flex flex-col items-center justify-center p-2.5 ~gap-[2.5rem]/[3.75rem]">
            {navlinks.map(({ name, link }) => (
              <li
                key={name}
                className="font-circularStd text-lg font-light uppercase tracking-wide text-black"
              >
                <NavLink
                  to={link}
                  onClick={() => setOpenNav(false)}
                  className={({ isActive }) =>
                    cn(
                      `relative flex items-center justify-center p-2.5 transition-colors duration-300 before:absolute before:bottom-0 before:size-[0.375rem] before:rounded-full`,
                      isActive && "before:bg-secondary-500",
                    )
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <ButtonLink className="mx-auto mt-12 px-7 py-4 font-euclid text-sm font-semibold uppercase tracking-wide">
            contact us
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

const navlinks = [
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
