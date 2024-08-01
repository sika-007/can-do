import { Background, TodoContainer } from "./components";
import { BsGithub } from "react-icons/bs";

function App() {
  return (
    <>
      <a
        href="https://github.com/sika-007/can-do"
        target="_blank"
        className="absolute cursor-pointer dark:text-white w-8 h-8 text-darkTheme-very-dark-blue left-7 top-7"
      >
        <BsGithub className="w-full h-full" />
      </a>
      <Background />
      <TodoContainer />
    </>
  );
}

export default App;
