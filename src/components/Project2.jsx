import {
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiChakraui,
} from "react-icons/si";
import kanban from "../images/kanban.png";

const Project2 = () => {
  return (
    <div className="flex flex-col text-white/90 font-medium h-full rounded-3xl bg-zinc-700 min-w-[250px] hover:bg-zinc-600 duration-200 ease-in-out">
      <img
        src={kanban}
        className="select-none flex h-full object-cover w-full rounded-t-3xl"
      />
      {/* <video
        src={kan}
        autoPlay
        loop
        muted
        className="select-none flex h-full object-cover w-full rounded-t-3xl"
      /> */}
      <div className="flex flex-col px-6 pb-6 pt-3 justify-between h-full">
        <div>
          <h2 className="text-[23px] font-semibold">KANBAN BOARD / TRELLO</h2>
          <p className="mt-1 ">
            A Trello / Kanban Board application that allows for creating,
            editing, deleting and dragging tasks between columns.
          </p>
        </div>
        <div className="flex gap-4 mb-1">
          <div className="text-[30px] flex flex-col items-center">
            <SiReact />
            <h6 className="text-[16px] text-center">React</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiTypescript />
            <h6 className="text-[16px] text-center">TypeScript</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiTailwindcss />
            <h6 className="text-[16px] text-center">Tailwind</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiChakraui />
            <h6 className="text-[16px] text-center">Chakra UI</h6>
          </div>
        </div>
        <div className="flex gap-x-2">
          <a href="https://mihajloz.github.io/kanban-board/" target="_blank">
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Live Demo
            </button>
          </a>
          <a href="https://github.com/mihajloz/kanban-board" target="_blank">
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project2;
