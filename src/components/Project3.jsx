import { SiMongodb, SiNodedotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import movieapi from "../assets/movieapi.png";

const Project3 = () => {
  return (
    <div className="flex flex-col text-white/90 font-medium h-full rounded-3xl bg-zinc-700 min-w-[200px] hover:bg-zinc-600 duration-200 ease-in-out">
      <img
        src={movieapi}
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
          <h2 className="text-[23px] font-semibold">Movie Api</h2>
          <p className="mt-3">
            Designed a REST API that handles data operations for movie
            information. Leveraged Node.js and Express to create a secure
            backend architecture, while MongoDB stored data in a non-relational
            manner. Implemented comprehensive user authentication and
            authorization mechanisms, along with data validation and security
            protocols.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 my-5">
          <div className="text-[30px] w-[80px] flex flex-col items-center">
            <SiNodedotjs />
            <h6 className="text-[16px] text-center">Node.js</h6>
          </div>
          <div className="text-[30px] w-[80px] flex flex-col items-center">
            <SiMongodb />
            <h6 className="text-[16px] text-center">MongoDB</h6>
          </div>
          <div className="text-[30px] w-[80px] flex flex-col items-center">
            <TbApi />
            <h6 className="text-[16px] text-center">REST API</h6>
          </div>
        </div>
        <div className="flex gap-x-2">
          <a
            href="https://cinemate.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Live Demo
            </button>
          </a>
          <a
            href="https://github.com/mihajloz/movie_api"
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

export default Project3;
