import { bgDesktopDark } from "../assets/images";

const Background = () => {
  return (
    <div className="w-screen h-screen absolute flex flex-col -z-20">
      <div className="w-full">
        <img className="w-full" src={bgDesktopDark} alt="top-bg" />
      </div>
      <div className="bg-lightTheme-very-light-gray w-full h-full" />
    </div>
  );
};

export default Background;
