const AboutIcon = ({ icon, title, color }) => {
  return (
    <div className="group m-1 hover:bg-zinc-600 duration-100 ease-in-out p-1 rounded-xl text-white/90">
      <div
        className={`flex justify-center text-[25px] sm:text-[35px] p-2 rounded-3xl group-hover:text-[${color}] duration-200 ease-in-out`}
      >
        {icon}
      </div>
      <div className="text-white/90 text-center text-[14px] sm:text-[16px] font-medium">
        {title}
      </div>
    </div>
  );
};

export default AboutIcon;
