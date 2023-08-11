import { SiAngular, SiMaterialdesign, SiTypescript } from "react-icons/si";
import angular from "../assets/angular.png";
import { TbApi } from "react-icons/tb";

const Project5 = () => {
  return (
    <div className="flex flex-col text-white/90 font-medium h-full rounded-3xl bg-zinc-700 min-w-[200px] hover:bg-zinc-600 duration-200 ease-in-out">
      <img
        src={angular}
        className="select-none flex h-full object-cover w-full rounded-t-3xl"
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
            Cinemate - Angular Client
          </h2>
          <p className="mt-1 ">
            Created a movie database application using Angular for the
            client-side. Seamlessly integrated with a REST API. Leveraged
            Angular Material to design an elegant user interface, focusing on
            usability and aesthetics. Employed Angular&apos;s powerful
            component-based architecture and reactive programming to streamline
            state management, ensuring a seamless interaction throughout the
            app.
          </p>
        </div>
        <div className="flex gap-4 mb-1">
          <div className="text-[30px] flex flex-col items-center">
            <SiAngular />
            <h6 className="text-[16px] text-center">Angular</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiTypescript />
            <h6 className="text-[16px] text-center">TypeScript</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiMaterialdesign />
            <h6 className="text-[16px] text-center">Angular Material</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <TbApi />
            <h6 className="text-[16px] text-center">REST API</h6>
          </div>
        </div>
        <div className="flex gap-x-2">
          <a
            href="https://mihajloz.github.io/cinemate-angular-client/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Live Demo
            </button>
          </a>
          <a
            href="https://github.com/mihajloz/cinemate-angular-client/"
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

export default Project5;
