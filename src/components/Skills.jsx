import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpo,
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
  SiNextdotjs,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { HiDocumentText } from "react-icons/hi";
import AboutIcon from "./AboutIcon";
// import { MdExpandMore } from "react-icons/md";
// import { scrollTo } from "../util/scrollTo";

const frontendIcons = [
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
    icon: <SiRedux />,
    title: "Redux",
    color: "#764abc",
  },
  {
    icon: <SiNextdotjs />,
    title: "NextJS",
    color: "#ffffff",
  },
  {
    icon: <SiAngular />,
    title: "Angular",
    color: "#a6120d",
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
];

const backendIcons = [
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
    icon: <SiMongodb />,
    title: "MongoDB",
    color: "#3fa037",
  },
  {
    icon: <SiAwslambda />,
    title: "AWS Lambda",
    color: "#f37b05",
  },
  {
    icon: <TbApi />,
    title: "REST APIs",
    color: "#ffffff",
  },
];

const mobileIcons = [
  {
    icon: <SiReact />,
    title: "React Native",
    color: "#61dbfb",
  },
  {
    icon: <SiExpo />,
    title: "Expo",
    color: "#ffffff",
  },
];

const otherIcons = [
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
    <div id="skills" className="bg-zinc-800 w-full flex flex-col items-center">
      <div className="mt-20">
        <div className="flex justify-center font-medium text-white tracking-wide mb-10 text-[3rem] xl:text-[4rem] lg:text-[5rem] md:text-[4rem] sm:text-[3rem] underline underline-offset-8 decoration-8 decoration-yellow-300">
          SKILLS
        </div>

        <div className="flex flex-col gap-2 items-start">
          <div className="flex flex-col md:flex-row max-w-[800px] relative p-5">
            <h1 className="font-semibold text-white tracking-wide text-[1.5rem] w-[120px] rotate-element mb-5 underline underline-offset-8 decoration-8 decoration-yellow-300">
              Frontend
            </h1>
            <div className="flex flex-wrap gap-2 md:ml-2">
              {frontendIcons.map((iconAbout, index) => (
                <AboutIcon
                  key={index}
                  icon={iconAbout.icon}
                  title={iconAbout.title}
                  color={iconAbout.color}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-w-[800px] relative p-5">
            <h1 className="font-semibold text-white tracking-wide text-[1.5rem] w-[120px] rotate-element mb-5 underline underline-offset-8 decoration-8 decoration-yellow-300">
              Backend
            </h1>
            <div className="flex flex-wrap gap-2">
              {backendIcons.map((iconAbout, index) => (
                <AboutIcon
                  key={index}
                  icon={iconAbout.icon}
                  title={iconAbout.title}
                  color={iconAbout.color}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-w-[800px] relative p-5">
            <h1 className="font-semibold text-white tracking-wide text-[1.5rem] w-[120px] rotate-element mb-5 underline underline-offset-8 decoration-8 decoration-yellow-300">
              Mobile
            </h1>
            <div className="flex flex-wrap gap-2">
              {mobileIcons.map((iconAbout, index) => (
                <AboutIcon
                  key={index}
                  icon={iconAbout.icon}
                  title={iconAbout.title}
                  color={iconAbout.color}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row max-w-[800px] relative p-5">
            <h1 className="font-semibold text-white tracking-wide text-[1.5rem] w-[120px] rotate-element mb-5 underline underline-offset-8 decoration-8 decoration-yellow-300">
              Other
            </h1>
            <div className="flex flex-wrap gap-2">
              {otherIcons.map((iconAbout, index) => (
                <AboutIcon
                  key={index}
                  icon={iconAbout.icon}
                  title={iconAbout.title}
                  color={iconAbout.color}
                />
              ))}
            </div>
          </div>
        </div>

        {/* <div className="flex flex-wrap max-w-[700px] justify-center gap-2">
          {icons.map((iconAbout, index) => (
            <AboutIcon
              key={index}
              icon={iconAbout.icon}
              title={iconAbout.title}
              color={iconAbout.color}
            />
          ))}
        </div> */}
      </div>

      {/* <button
        onClick={() => scrollTo("work")}
        className="cursor-point absolute bottom-0 text-[60px] py-3 w-screen overflow-hidden flex justify-center text-white/90 animated-jump"
      >
        <MdExpandMore />
      </button> */}
    </div>
  );
};

export default Skills;
