import { MdExpandMore } from "react-icons/md";
import { scrollTo } from "../util/scrollTo";

const About = () => {
  return (
    <div
      id="about"
      className="bg-zinc-800 w-full h-screen flex flex-col xl:flex-row items-start sm:items-center justify-start"
    >
      <div className="max-w-[1600px] flex justify-center flex-row pl-0">
        <div className="flex flex-col text-white/90 ml-4 max-w-[50vw] md:basis-2/5 mt-20 xl:mt-0">
          <div className="xl:text-[1.5rem] lg:text-[20px] md:text-[18px] sm:text-[16px] ml-3">
            Hi, I&apos;m
          </div>
          <div className="text-white/90 ml-2 ease-in-out duration-200 font-medium tracking-wide text-[75px] xl:text-[7rem] lg:text-[6rem] md:text-[5rem] sm:text-[5rem]">
            MIHAJLO,
          </div>
          <div className="xl:text-[1.5rem] lg:text-[20px] md:text-[18px] sm:text-[16px] ml-3 mb-10">
            a fullstack developer based in Germany. On this website, you will
            find a showcase of my software development projects.
          </div>
          <div className="flex flex-col items-start gap-8 ml-2 md:flex-row md:gap-5 w-full">
            <button>
              <span className="px-7 py-3 rounded-full bg-yellow-400 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
                Download my CV
              </span>
            </button>
            <button onClick={() => scrollTo("contact")}>
              <span className="px-7 py-3 rounded-full bg-yellow-400 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
                Hire Me
              </span>
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo("skills")}
        className="cursor-point absolute bottom-0 text-[60px] py-3 w-screen overflow-hidden flex justify-center text-white/80 animated-jump"
      >
        <MdExpandMore />
      </button>
    </div>
  );
};

export default About;
