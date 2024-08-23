import { ButtonLink } from "@/components";

const Navbar = () => {
  return (
    <header className="full-width content-grid fixed w-full py-8">
      <nav className="itce flex items-center justify-between">
        <h1 className="bg-primary-500 px-14 py-4 text-lg font-medium uppercase text-white">
          LOGO
        </h1>

        <div className="flex items-center justify-end gap-20">
          <ul className="flex items-center justify-center gap-[3.75rem] p-2.5">
            {[1, 2, 3].map((item) => (
              <li
                key={item}
                className="p-2.5 font-euclid text-sm font-semibold uppercase tracking-wide text-white"
              >
                Link
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
