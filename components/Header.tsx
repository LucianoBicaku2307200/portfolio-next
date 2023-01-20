import { link } from "fs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const links = [
  { path: "/", content: "_home" },
  { path: "/about", content: " _about-me" },
  { path: "/projects", content: "_projects" },
  { path: "/contact", content: "_contact-me" },
];

function Header() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;
  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (window.innerWidth > 768) setMenu(true);
  }, []);

  return (
    <header className="left-00 absolute top-0 flex w-screen flex-wrap border-b border-lines text-secondary1">
      <div className="w-10/12 p-4  md:w-1/4  lg:py-4 lg:px-8">
        luciano-bicaku
      </div>
      <button
        onClick={toggleMenu}
        className="flex w-2/12 cursor-pointer items-center justify-center px-3 py-4 md:hidden"
      >
        {menu ? (
          <i className="ri-close-line ri-xl"></i>
        ) : (
          <i className=" ri-menu-line ri-xl"></i>
        )}
      </button>
      <nav
        className={`absolute top-14 left-0 transition-all duration-300 ease-in-out md:top-0 ${
          menu
            ? "pointer-events-auto z-10 opacity-100"
            : "pointer-events-none z-0 opacity-0"
        } flex w-full flex-1 flex-col bg-primary2 sm:ml-0 md:relative md:w-auto md:flex-row`}
      >
        {links.map((el, index) => (
          <Link
            key={index}
            className={`w-full border-y border-lines p-4 md:w-auto md:border-y-0 md:border-x md:py-4 md:px-6  lg:border lg:px-8 ${
              index == links.length - 2 && "md:mr-auto"
            } ${
              currentRoute == el.path
                ? "border border-b-[3px] border-b-accent1 text-white"
                : ""
            }`}
            href={el.path}
          >
            {el.content}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
