import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import disney from "../assets/disney.png";

const Project8 = () => {
  return (
    <div className="flex flex-col text-white/90 font-medium h-full rounded-3xl bg-zinc-700 min-w-[200px] hover:bg-zinc-600 duration-200 ease-in-out">
      <img
        src={disney}
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
          <h2 className="text-[23px] font-semibold">Disney+ Clone</h2>
          <p className="mt-3">
            Developed a full-stack Disney+ clone using Next.js, TypeScript,
            Tailwind CSS, Node.js, Express, and NextAuth. This project
            replicates the original Disney+ website, implementing server-side
            rendering for a seamless user experience. Users can explore a vast
            library of movies, add them to their watchlist, and enjoy secure
            authentication and authorization features powered by NextAuth.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 my-5">
          <div className="text-[30px] flex flex-col items-center">
            <SiTypescript />
            <h6 className="text-[16px] text-center">Typescript</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiNextdotjs />
            <h6 className="text-[16px] text-center">NextJS</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiTailwindcss />
            <h6 className="text-[16px] text-center">TailwindCSS</h6>
          </div>
        </div>
        <div className="flex gap-x-2">
          <a
            href="https://mihajloz.github.io/kanban/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-500 duration-200 ease-in-out">
              Live Demo
            </button>
          </a>
          <a
            href="https://github.com/mihajloz/kanban/"
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

export default Project8;
