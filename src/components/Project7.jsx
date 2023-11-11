import { SiChakraui, SiReact, SiTypescript } from "react-icons/si";
import kanban from "../assets/kanban.png";

const Project7 = () => {
  return (
    <div className="flex flex-col text-white/90 font-medium h-full rounded-3xl bg-zinc-700 min-w-[200px] hover:bg-zinc-600 duration-200 ease-in-out">
      <img
        src={kanban}
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
          <h2 className="text-[23px] font-semibold">Kanban Board</h2>
          <p className="mt-3">
            Developed a Kanban Board using TypeScript, React, and ChakraUI. The
            kanban board enables users to organize tasks effectively through a
            drag-and-drop interface. Task data is persistently stored in the
            local storage, ensuring users can access their boards even after
            closing the browser.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 my-5">
          <div className="text-[30px] flex flex-col items-center">
            <SiTypescript />
            <h6 className="text-[16px] text-center">Typescript</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiReact />
            <h6 className="text-[16px] text-center">React</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiChakraui />
            <h6 className="text-[16px] text-center">Chakra UI</h6>
          </div>
        </div>
        <div className="flex gap-x-2">
          <a
            href="https://disney-plus-mauve.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Live Demo
            </button>
          </a>
          <a
            href="https://github.com/mihajloz/disney-plus/"
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

export default Project7;
