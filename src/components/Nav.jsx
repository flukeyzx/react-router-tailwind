import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex w-full h-auto justify-between shadow-lg bg-slate-100 p-4">
      <h1 className=" text-3xl font-[400]">
        Gift<span className="text-orange-600 font-bold">Gallery</span>
      </h1>
      <div className="flex items-center">
        <div className="mr-4 hidden md:block">
          <ul className="flex gap-3 cursor-pointer md:text-xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-orange-600 ${
                  isActive ? "text-orange-600" : "text-grey-500"
                } transition-all ease delay-75`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-orange-600 ${
                  isActive ? "text-orange-600" : "text-grey-500"
                } transition-all ease delay-75`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-orange-600 ${
                  isActive ? "text-orange-600" : "text-grey-500"
                } transition-all ease delay-75`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `hover:text-orange-600 ${
                  isActive ? "text-orange-600" : "text-grey-500"
                } transition-all ease delay-75`
              }
            >
              FAQs
            </NavLink>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="border-[2px] mr-1 rounded-lg border-slate-400 hover:bg-slate-400 transition-all delay-75 ease-in-out px-4 py-1.5">
            Login
          </button>
          <button className="border-[2px] rounded-lg border-orange-600 text-white bg-orange-600 hover:bg-orange-700 hover:border-orange-700 transition-all delay-75 ease-in-out px-4 py-1.5">
            Signup
          </button>
        </div>
      </div>
      <div className="text-[1.6rem] md:hidden cursor-pointer">&#8801;</div>
    </nav>
  );
};

export default Nav;
