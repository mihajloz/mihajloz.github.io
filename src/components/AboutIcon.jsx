import PropTypes from "prop-types";

const AboutIcon = ({ icon, title, color }) => {
  const iconStyles = {
    color: color,
    transition: "color 0.2s ease-in-out",
  };
  return (
    <div className="group w-[120px] p-2 hover:bg-yellow-300 duration-100 ease-in-out rounded-md text-white/90 box">
      <div
        className="flex justify-center text-30px sm:text-[40px] p-2 rounded-3xl duration-200 ease-in-out"
        style={iconStyles}
      >
        {icon}
      </div>
      <div className="text-white/90 text-center text-[14px] sm:text-[16px] font-normal uppercase group-hover:text-black">
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
