import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiReact,
  SiChakraui,
  SiJest,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
import { BsFillCircleFill } from "react-icons/bs";
import AboutIcon from "./AboutIcon";
import { MdExpandMore } from "react-icons/md";
import { scrollTo } from "../util/scrollTo";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

const icons = [
  {
    icon: <SiReact />,
    title: "React",
    color: "#61dbfb",
  },
  {
    icon: <SiTypescript />,
    title: "Typescript",
    color: "#0076c6",
  },
  {
    icon: <SiJavascript />,
    title: "Javascript",
    color: "#F0DB4F",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind",
    color: "#06b6d4",
  },
  {
    icon: <SiChakraui />,
    title: "Chakra UI",
    color: "#3ac7bd",
  },
  {
    icon: <SiFigma />,
    title: "Figma",
    color: "#FF7262",
  },
  {
    icon: <BsFillCircleFill />,
    title: "Spline 3D",
    color: "#FF3AF3",
  },
  {
    icon: <SiJest />,
    title: "Jest",
    color: "#c21325",
  },
  {
    icon: <SiNodedotjs />,
    title: "NodeJS",
    color: "#3c873a",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    color: "#3fa037",
  },

  {
    icon: <SiHtml5 />,
    title: "HTML",
    color: "#dd4b25",
  },
  {
    icon: <SiCss3 />,
    title: "CSS",
    color: "#264de4",
  },
];

const Component2 = () => {
  return (
    <div
      id="projects"
      className="relative snap-start bg-gradient-to-b from-zinc-800 to-zinc-900 w-screen h-screen flex flex-col items-center"
    >
      <div className="mt-20">
        <h1 className="tracking-wider select-none text-white/90 text-[40px] min-w-[550px] font-medium flex justify-center">
          SKILLS // PROJECTS
        </h1>
        <div className="flex flex-wrap w-full justify-center">
          {icons.map((iconAbout, index) => (
            <AboutIcon
              key={index}
              icon={iconAbout.icon}
              title={iconAbout.title}
              color={iconAbout.color}
            />
          ))}
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 h-full px-[60px] min-w-[600px] mb-[100px] select-none overflow-y-scroll">
        <Project1 />
        <Project2 />
        <Project3 />
      </div>

      <button
        onClick={() => scrollTo("contact")}
        className="cursor-point absolute bottom-0 text-[60px] py-3 w-screen overflow-hidden flex justify-center text-white/90 animated-jump"
      >
        <MdExpandMore />
      </button>
    </div>
  );
};

export default Component2;
