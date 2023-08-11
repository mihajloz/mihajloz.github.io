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
      className="relative snap-start bg-zinc-900 w-screen h-full flex items-start justify-center text-center select-none z-100 flex-row"
    >
      <div className="flex w-full md:basis-2/5 flex-col text-white/90 ml-4 mt-20">
        <div className="font-medium tracking-wide text-[4rem] xl:text-[7rem] lg:text-[6rem] md:text-[5rem] sm:text-[4rem]">
          CONTACT
        </div>
        <div>
          <button
            className="email-btn  rounded-xl font-regular py-2 px-2 text-[1.2rem] xl:text-[3rem] lg:text-[2rem] md:text-[1.5rem] sm:text-[1.2rem]"
            onClick={() => copyToClipBoard("mihajlo.zlt@gmail.com")}
          >
            mihajlo.zlt@gmail.com
          </button>
          <div className="ml-2 mb-8 text-[14px] sm:text-[15px] md:text-[16px]">
            {copySuccess ? copySuccess : "Click Email To Copy"}
          </div>
        </div>
        <hr></hr>
        <a
          href="https://google.com"
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-8 mb-10 flex w-full justify-center items-center px-6 py-3 rounded-full bg-white/90 text-black hover:text-white hover:bg-zinc-600 duration-200 ease-in-out">
            <HiDocumentText className="text-[30px]" />
            <div className="font-medium ml-2">Resume</div>
          </button>
        </a>
        <hr></hr>
        <div className="flex gap-2 mt-8">
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
