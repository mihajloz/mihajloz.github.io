import { MdExpandMore } from "react-icons/md";
import { scrollTo } from "../util/scrollTo";

const About = () => {
  return (
    <div
      id="about"
      className="relative snap-start bg-zinc-800 w-screen h-screen flex flex-col xl:flex-row items-start xl:items-center justify-start select-none pl-10"
    >
      <div className="flex flex-col text-white/90 ml-4 max-w-[50vw] md:basis-2/5 mt-20 xl:mt-0">
        <div className="xl:text-[2rem] lg:text-[25px] md:text-[22px] sm:text-[20px] ml-3">
          Hi, I&apos;m
        </div>
        <div className="text-white/90 hover:text-white ease-in-out duration-200 font-medium tracking-wide text-[5rem] xl:text-[9rem] lg:text-[7rem] md:text-[7rem] sm:text-[6rem]">
          MIHAJLO,
        </div>
        <div className="xl:text-[2rem] lg:text-[25px] md:text-[22px] sm:text-[20px] ml-3 max-w-[50vw]">
          a developer based in Germany. On this website, you will find a
          showcase of my independent software development projects.
        </div>
      </div>
      <button
        onClick={() => scrollTo("projects")}
        className="cursor-point absolute bottom-0 text-[60px] py-3 w-screen overflow-hidden flex justify-center text-white/80 animated-jump"
      >
        <MdExpandMore />
      </button>
    </div>
  );
};

export default About;
