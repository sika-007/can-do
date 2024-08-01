import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const TodoBox = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [newTodo, setNewTodo] = useState("");
  const [todoListItems, setTodoListItems] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme, todoListItems]);

  const createTodo = () => {
    const todoLength = todoListItems?.length || 0;
    const todo = {
      title: newTodo,
      id: todoLength + 1,
      completed: false,
    };
    if (todo.title > 3) {
      setTodoListItems((prev) => {
        return [...prev, todo];
      });
      localStorage.setItem("todolist", JSON.stringify(todoListItems));
    }
  };

  return (
    <div className="mobile:w-4/5 w-3/5 h-4/5 px-3 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold tracking-[0.3em] text-darkTheme-very-dark-desaturated-blue dark:text-darkTheme-light-grayish-blue">
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
      <TodoInput createTodo={createTodo} setNewTodo={setNewTodo} />
      <TodoList
        todoListItems={todoListItems}
        setTodoListItems={setTodoListItems}
      />
    </div>
  );
};

export default TodoBox;
