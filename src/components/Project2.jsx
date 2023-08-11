import { SiFirebase, SiJavascript, SiReact } from "react-icons/si";
import chat from "../assets/chat.png";

const Project2 = () => {
  return (
    <div className="flex flex-col text-white/90 font-medium h-full rounded-3xl bg-zinc-700 min-w-[200px] hover:bg-zinc-600 duration-200 ease-in-out">
      <img
        src={chat}
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
          <h2 className="text-[23px] font-semibold">React Native Chat App</h2>
          <p className="mt-1 ">
            Developed a chat application using React Native & Expo, and
            employing Google Firestore Database for storing chat conversations.
            With Firebase Authentication, users can authenticate anonymously,
            ensuring a secure environment for exchanging messages and media.
          </p>
        </div>
        <div className="flex gap-4 mb-1">
          <div className="text-[30px] flex flex-col items-center">
            <SiReact />
            <h6 className="text-[16px] text-center">React Native</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiJavascript />
            <h6 className="text-[16px] text-center">JavaScript</h6>
          </div>
          <div className="text-[30px] flex flex-col items-center">
            <SiFirebase />
            <h6 className="text-[16px] text-center">Firebase</h6>
          </div>
        </div>
        <div className="flex gap-x-2">
          <a
            href="https://github.com/mihajloz/chat"
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

export default Project2;
