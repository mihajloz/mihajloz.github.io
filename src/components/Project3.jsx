import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import type from "../images/type.png";

const Project3 = () => {
  return (
    <div className="flex flex-col text-white/80 font-medium h-full rounded-3xl bg-zinc-700 min-w-[200px] hover:bg-zinc-600 duration-200 ease-in-out">
      <img
        src={type}
        className="select-none flex h-full object-cover w-full rounded-t-3xl"
      />
      {/* <video
        src={typ}
        autoPlay
        loop
        muted
        className="select-none flex h-full object-cover w-full rounded-t-3xl"
      /> */}
      <div className="flex flex-col px-6 pb-6 pt-3 justify-between h-full">
        <div>
          <h2 className="text-[23px] font-semibold">SPEED TYPING GAME</h2>
          <p className="mt-1 ">
            Developed a Speed Typing Game using JavaScript, HTML and CSS which
            measures the user's Words Per Minute.
          </p>
        </div>
        <div className="flex gap-4 mb-1">
          <div className="text-[30px] flex flex-col items-center">
            <SiJavascript />
            <h6 className="text-[16px] text-center">JavaScript</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiHtml5 />
            <h6 className="text-[16px] text-center">HTML</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiCss3 />
            <h6 className="text-[16px] text-center">CSS</h6>
          </div>
        </div>
        <div className="flex gap-x-2">
          <a href="https://mihajloz.github.io/speed-type/" target="_blank">
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Live Demo
            </button>
          </a>
          <a href="https://github.com/mihajloz/speed-type" target="_blank">
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project3;
