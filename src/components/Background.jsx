import { bgDesktopDark } from "../assets/images";

const Background = () => {
  return (
    <div className="w-screen h-screen absolute flex flex-col -z-20">
      <div className="w-full">
        <img className="w-full" src={bgDesktopDark} alt="top-bg" />
      </div>
      <div className="bg-lightTheme-very-light-gray dark:bg-darkTheme-very-dark-blue w-full h-full transition-all flex items-center justify-center">
        <p className="absolute bottom-28 text-black dark:text-white">
          Drag and drop to reorder your Candos
        </p>
      </div>
    </div>
  );
};

export default Background;
