import { scrollTo } from "../util/scrollTo";

const Nav = () => {
  return (
    <div className="z-10 fixed w-screen flex justify-between select-none py-6 text-white/80 font-medium text-[18px] min-w-[400px] ml-5 sm:ml-0 bg-zinc-800">
      <div className="w-full justify-start pl-[50px] hidden sm:flex"></div>
      <div className="w-full flex justify-center gap-x-4">
        <button
          className="hover:text-white duration-200 ease-in-out text-center"
          onClick={() => scrollTo("about")}
        >
          About
        </button>
        <button
          className="hover:text-white duration-200 ease-in-out text-center"
          onClick={() => scrollTo("skills")}
        >
          Skills
        </button>
        <button
          className="hover:text-white duration-200 ease-in-out text-center"
          onClick={() => scrollTo("work")}
        >
          Work
        </button>
        <button
          className="hover:text-white duration-200 ease-in-out text-center"
          onClick={() => scrollTo("contact")}
        >
          Contact
        </button>
      </div>
      <a className="w-full flex justify-end pr-8 sm:pr-20">
        <button onClick={() => scrollTo("contact")}>
          <span className="px-7 py-3 rounded-full bg-yellow-400 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
            Hire Me
          </span>
        </button>
      </a>
    </div>
  );
};

export default Nav;
