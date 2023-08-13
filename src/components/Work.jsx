import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";

const Work = () => {
  return (
    <div
      id="work"
      className="bg-zinc-800 w-full h-full flex flex-col items-center"
    >
      <div className="mt-20 mb-10">
        <div className="font-medium text-white tracking-wide text-[3rem] xl:text-[4rem] lg:text-[5rem] md:text-[4rem] sm:text-[3rem] underline underline-offset-8 decoration-8 decoration-yellow-300">
          WORK
        </div>
      </div>

      <div className="max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 gap-5 h-full min-w-[350px] px-4 lg:px-20">
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
      </div>

      {/* <button
        onClick={() => scrollTo("work2")}
        className="cursor-point absolute bottom-0 text-[60px] py-3 w-screen overflow-hidden flex justify-center text-white/90 animated-jump"
      >
        <MdExpandMore />
      </button> */}
    </div>
  );
};

export default Work;
