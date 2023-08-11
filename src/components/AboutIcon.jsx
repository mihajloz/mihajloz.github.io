import PropTypes from "prop-types";

const AboutIcon = ({ icon, title, color }) => {
  const iconStyles = {
    color: color,
    transition: "color 0.2s ease-in-out",
  };
  return (
    <div className="group w-[100px] m-1 hover:bg-zinc-600 duration-100 ease-in-out p-1 rounded-xl text-white/90">
      <div
        className="flex justify-center text-[25px] sm:text-[35px] p-2 rounded-3xl duration-200 ease-in-out"
        style={iconStyles}
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

AboutIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
