import { SiJavascript, SiTailwindcss, SiReact } from "react-icons/si";
import disc from "../vid/disc.webm";

const Project1 = () => {
  return (
    <div className="flex flex-col text-white/90 font-medium h-full rounded-3xl bg-zinc-700 min-w-[250px] hover:bg-zinc-600 duration-200 ease-in-out">
      {/* <img
            src={discord}
            className="flex h-full object-cover w-full rounded-t-lg"
          /> */}
      <video
        src={disc}
        autoPlay
        loop
        muted
        className="select-none flex h-full object-cover w-full rounded-t-3xl"
      />
      <div className="flex flex-col px-6 pb-6 pt-3 justify-between h-full">
        <div>
          <h2 className="text-[23px] font-semibold">DISCORD CLONE</h2>
          <p className="mt-1 ">
            An identical front-end Discord clone website, built using React,
            JavaScript, and TailwindCSS.
          </p>
        </div>
        <div className="flex gap-4 mb-1">
          <div className="text-[30px] flex flex-col items-center">
            <SiReact />
            <h6 className="text-[16px] text-center">React</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiJavascript />
            <h6 className="text-[16px] text-center">JavaScript</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiTailwindcss />
            <h6 className="text-[16px] text-center">Tailwind</h6>
          </div>
        </div>
        <div className="flex gap-x-2">
          <a href="https://mihajloz.github.io/react-discord/" target="_blank">
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Live Demo
            </button>
          </a>
          <a href="https://github.com/mihajloz/react-discord" target="_blank">
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project1;
