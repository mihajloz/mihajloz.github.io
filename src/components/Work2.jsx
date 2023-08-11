import { scrollTo } from "../util/scrollTo";
import { MdExpandMore } from "react-icons/md";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";

const Work = () => {
  return (
    <div
      id="work2"
      className="relative snap-start bg-zinc-900 w-screen h-screen flex flex-col items-center"
    >
      <div className="mt-20"></div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4 h-full px-[60px] min-w-[600px] mb-[100px] select-none overflow-y-scroll">
        <Project4 />
        <Project5 />
        <Project6 />
      </div>

      <button
        onClick={() => scrollTo("contact")}
        className="cursor-point absolute bottom-0 text-[60px] py-3 w-screen overflow-hidden flex justify-center text-white/90 animated-jump"
      >
        <MdExpandMore />
      </button>
    </div>
  );
};

export default Work;
