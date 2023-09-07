import {
  SiAwslambda,
  SiJavascript,
  SiJest,
  SiPuppeteer,
  SiReact,
} from "react-icons/si";
import eventscout from "../assets/eventscout.png";

const Project1 = () => {
  return (
    <div className="flex flex-col text-white/90 font-medium h-full rounded-3xl bg-zinc-700 min-w-[200px] hover:bg-zinc-600 duration-200 ease-in-out">
      <img
        src={eventscout}
        className="flex h-full object-cover w-full rounded-t-3xl"
      />
      {/* <video
        src={disc}
        autoPlay
        loop
        muted
        className="select-none flex h-full object-cover w-full rounded-t-3xl"
      /> */}
      <div className="flex flex-col px-6 pb-6 pt-3 justify-between h-full">
        <div>
          <h2 className="text-[23px] font-semibold">
            EventScout - Google Calendar Event Finder
          </h2>
          <p className="mt-3">
            Built a serverless, progressive web application (PWA) using React
            and a test-driven development approach (TDD). Utilized the Google
            Calendar API to fetch upcoming events. Developed data visualization
            components using Recharts to for enhanced user experience.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 my-5">
          <div className="text-[30px] w-[80px] flex flex-col flex-wrap items-center">
            <SiReact />
            <h6 className="text-[16px] text-center">React</h6>
          </div>
          <div className="text-[30px] w-[80px] flex flex-col items-center">
            <SiJavascript />
            <h6 className="text-[16px] text-center">JavaScript</h6>
          </div>
          <div className="text-[30px] w-[80px] flex flex-col items-center">
            <SiAwslambda />
            <h6 className="text-[16px] text-center">AWS Lambda</h6>
          </div>
          <div className="text-[30px] w-[80px] flex flex-col items-center">
            <SiJest />
            <h6 className="text-[16px] text-center">Jest</h6>
          </div>
          <div className="text-[30px] w-[80px] flex flex-col items-center">
            <SiPuppeteer />
            <h6 className="text-[16px] text-center">Puppeteer</h6>
          </div>
        </div>
        <div className="flex gap-x-2">
          <a
            href="https://mihajloz.github.io/EventScout/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Live Demo
            </button>
          </a>
          <a
            href="https://github.com/mihajloz/EventScout/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Github
            </button>
          </a>
          <a
            href="https://mihajloz.github.io/case-study/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Case Study
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project1;
