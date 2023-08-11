import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
import pokedex from "../assets/pokedex.png";
import { TbApi } from "react-icons/tb";

const Project6 = () => {
  return (
    <div className="flex flex-col text-white/90 font-medium h-full rounded-3xl bg-zinc-700 min-w-[200px] hover:bg-zinc-600 duration-200 ease-in-out">
      <img
        src={pokedex}
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
          <h2 className="text-[23px] font-semibold">Pokedex API</h2>
          <p className="mt-1 ">
            Created an immersive Pokédex web application using JavaScript,
            Bootstrap, HTML, and CSS. This app allows users to explore the
            fascinating world of Pokémon by seamlessly integrating with the
            Pokémon API. Users can search for specific Pokémon, view their
            details, types, abilities, and evolutions. Leveraged Bootstrap for a
            responsive UI.
          </p>
        </div>
        <div className="flex gap-4 mb-1">
          <div className="text-[30px] flex flex-col items-center">
            <SiJavascript />
            <h6 className="text-[16px] text-center">JavaScript</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <TbApi />
            <h6 className="text-[16px] text-center">REST API</h6>
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
          <a
            href="https://mihajloz.github.io/pokedex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Live Demo
            </button>
          </a>
          <a
            href="https://github.com/mihajloz/pokedex/"
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

export default Project6;
