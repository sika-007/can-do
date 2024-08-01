import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const TodoBox = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  console.log(theme);

  return (
    <div className="w-3/5 h-4/5 px-3 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold tracking-[0.3em] text-white">
          CANDO
        </h1>
        {theme === "light" ? (
          <CiDark
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-4xl text-darkTheme-very-dark-blue"
          />
        ) : (
          <CiLight
            onClick={() => setTheme("light")}
            className="cursor-pointer text-4xl text-white"
          />
        )}
      </div>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoBox;
