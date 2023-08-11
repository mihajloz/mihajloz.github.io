import { scrollTo } from "../util/scrollTo";
import { MdExpandMore } from "react-icons/md";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

const Work = () => {
  return (
    <div
      id="work"
      className="relative snap-start bg-gradient-to-b from-zinc-800 to-zinc-900 w-screen h-screen flex flex-col items-center"
    >
      <div className="mt-20">
        <div className="font-medium select-none text-white tracking-wide text-[2rem] xl:text-[4rem] lg:text-[3rem] md:text-[2rem] sm:text-[2rem]">
          WORK
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4 h-full px-[60px] min-w-[600px] mb-[100px] select-none overflow-y-scroll">
        <Project1 />
        <Project2 />
        <Project3 />
      </div>

      <button
        onClick={() => scrollTo("work2")}
        className="cursor-point absolute bottom-0 text-[60px] py-3 w-screen overflow-hidden flex justify-center text-white/90 animated-jump"
      >
        <MdExpandMore />
      </button>
    </div>
  );
};

export default Work;
