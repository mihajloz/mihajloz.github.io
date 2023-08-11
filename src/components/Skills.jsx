import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiAwslambda,
  SiMongodb,
  SiJest,
  SiPuppeteer,
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
  SiMaterialdesign,
  SiHtml5,
  SiCss3,
  SiSass,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { HiDocumentText } from "react-icons/hi";
import AboutIcon from "./AboutIcon";
import { MdExpandMore } from "react-icons/md";
import { scrollTo } from "../util/scrollTo";

const icons = [
  {
    icon: <SiJavascript />,
    title: "Javascript",
    color: "#F0DB4F",
  },
  {
    icon: <SiTypescript />,
    title: "Typescript",
    color: "#0076c6",
  },
  {
    icon: <SiReact />,
    title: "React",
    color: "#61dbfb",
  },
  {
    icon: <SiReact />,
    title: "React Native",
    color: "#61dbfb",
  },
  {
    icon: <SiRedux />,
    title: "Redux",
    color: "#764abc",
  },
  {
    icon: <SiAngular />,
    title: "Angular",
    color: "#a6120d",
  },
  {
    icon: <SiNodedotjs />,
    title: "Node.js",
    color: "#3c873a",
  },
  {
    icon: <SiExpress />,
    title: "Express",
    color: "#fffff",
  },
  {
    icon: <TbApi />,
    title: "REST APIs",
    color: "#ffffff",
  },
  {
    icon: <SiAwslambda />,
    title: "AWS Lambda",
    color: "#f37b05",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    color: "#3fa037",
  },
  {
    icon: <SiJest />,
    title: "Jest",
    color: "#c21325",
  },
  {
    icon: <SiPuppeteer />,
    title: "Puppeteer",
    color: "#01d19d",
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
    icon: <SiBootstrap />,
    title: "Bootstrap",
    color: "#563d7c",
  },
  {
    icon: <SiMaterialdesign />,
    title: "Material Design",
    color: "#ffffff",
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
  {
    icon: <SiSass />,
    title: "CSS",
    color: "#cd6799",
  },
  {
    icon: <HiDocumentText />,
    title: "JSDoc",
    color: "#ffffff",
  },
  {
    icon: <HiDocumentText />,
    title: "Typedoc",
    color: "#ffffff",
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative snap-start bg-zinc-800 w-screen h-screen flex flex-col items-center"
    >
      <div className="mt-20">
        <div className="font-medium select-none text-white tracking-wide text-[4rem] xl:text-[7rem] lg:text-[6rem] md:text-[5rem] sm:text-[4rem] flex justify-center">
          SKILLS
        </div>

        <div className="flex flex-wrap max-w-[700px] justify-center gap-2">
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

      <button
        onClick={() => scrollTo("contact")}
        className="cursor-point absolute bottom-0 text-[60px] py-3 w-screen overflow-hidden flex justify-center text-white/90 animated-jump"
      >
        <MdExpandMore />
      </button>
    </div>
  );
};

export default Skills;
