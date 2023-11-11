import { useState } from "react";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div
      id="contact"
      className="relative snap-start bg-zinc-800 w-screen h-full flex items-start justify-center text-center z-100 flex-row mb-[250px]"
    >
      <div className="flex w-full md:basis-2/5 flex-col text-white/90">
        <div className="mt-20 mb-10">
          <div className="font-medium text-whit tracking-wide text-[3rem] xl:text-[4rem] lg:text-[5rem] md:text-[4rem] sm:text-[3rem] underline underline-offset-8 decoration-8 decoration-yellow-300">
            CONTACT
          </div>
        </div>
        <div>
          <button
            className="email-btn hover:text-zinc-900 rounded-xl font-regular py-2 px-2 text-[2rem] xl:text-[3rem] lg:text-[2rem] md:text-[1.5rem] sm:text-[2rem]"
            onClick={() => copyToClipBoard("mihajlo.zlt@gmail.com")}
          >
            mihajlo.zlt@gmail.com
          </button>
          <div className="ml-2 mb-8 text-[14px] sm:text-[15px] md:text-[16px]">
            {copySuccess ? copySuccess : "Click Email To Copy"}
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/163u2_wLid9LCAU30sA4a9tUVk0MtaQSr/view?usp=sharing"
          className="w-full px-12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-3 mb-3 flex w-full justify-center items-center px-6 py-3 rounded-full bg-yellow-400 text-black hover:text-white hover:bg-zinc-600 duration-200 ease-in-out">
            <HiDocumentText className="text-[30px]" />
            <div className="font-medium ml-2">Resume</div>
          </button>
        </a>
        <div className="flex gap-2 mt-3 flex-col md:flex-row px-12">
          <a
            href="https://www.linkedin.com/in/mihajlo-zlaticanin/"
            target="_blank"
            className="flex basis-1/3 "
            rel="noopener noreferrer"
          >
            <button className="w-full flex items-center px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-[#0766C2] duration-200 ease-in-out">
              <SiLinkedin className="text-[30px]" />
              <div className="font-medium ml-2">LinkedIn</div>
            </button>
          </a>
          <a
            href="mailto:mihajlo.zlt@gmail.com"
            target="_blank"
            className="flex basis-1/3 "
            rel="noopener noreferrer"
          >
            <button className="w-full flex items-center px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-[#c71610] duration-200 ease-in-out">
              <SiGmail className="text-[30px]" />
              <div className="font-medium ml-2">Email</div>
            </button>
          </a>
          <a
            href="https://github.com/mihajloz"
            target="_blank"
            className="flex basis-1/3 "
            rel="noopener noreferrer"
          >
            <button className="w-full flex items-center px-6 py-2 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-600 duration-200 ease-in-out">
              <SiGithub className="text-[30px]" />
              <div className="font-medium ml-2">GitHub</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
