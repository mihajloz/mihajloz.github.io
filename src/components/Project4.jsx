import { SiJavascript, SiReact, SiRedux } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import angular from "../assets/angular.png";

const Project4 = () => {
  return (
    <div className="flex flex-col text-white/90 font-medium h-full rounded-3xl bg-zinc-700 min-w-[200px] hover:bg-zinc-600 duration-200 ease-in-out">
      <img
        src={angular}
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
          <h2 className="text-[23px] font-semibold">Cinemate - React Client</h2>
          <p className="mt-3">
            Developed a full-stack movie database app using React for the
            client-side. Seamlessly integrated with a REST API to provide users
            with a responsive and engaging movie exploration journey. Leveraged
            Bootstrap for the UI, and React Redux for streamlined state
            management.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 my-5">
          <div className="text-[30px] w-[80px] flex flex-col items-center">
            <SiReact />
            <h6 className="text-[16px] text-center">React</h6>
          </div>
          <div className="text-[30px] w-[80px] flex flex-col items-center">
            <SiRedux />
            <h6 className="text-[16px] text-center">Redux</h6>
          </div>
          <div className="text-[30px] w-[80px] flex flex-col items-center">
            <SiJavascript />
            <h6 className="text-[16px] text-center">JavaScript</h6>
          </div>
          <div className="text-[30px] w-[80px] flex flex-col items-center">
            <TbApi />
            <h6 className="text-[16px] text-center">REST API</h6>
          </div>
        </div>
        <div className="flex gap-x-2">
          <a
            href="https://cinemate1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Live Demo
            </button>
          </a>
          <a
            href="https://github.com/mihajloz/cinemate-client/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project4;
