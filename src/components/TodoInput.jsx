import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    const todoList = JSON.parse(localStorage.getItem("todolist")) || [];
    const todoLength = todoList?.length || 0;
    const todo = {
      title: newTodo,
      id: todoLength + 1,
      completed: false,
    };
    todoList.push(todo);
    localStorage.setItem("todolist", JSON.stringify(todoList));
  };

  return (
    <div className="w-full transition-colors dark:bg-darkTheme-very-dark-desaturated-blue shadow-xl bg-white rounded-lg flex items-center pr-2">
      <input
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="What can you do today?"
        className="w-full bg-transparent dark:text-white rounded-lg focus:ring-0 focus:outline-none px-4 h-12"
      />
      <FaPlusCircle
        onClick={createTodo}
        className="cursor-pointer dark:text-white"
      />
    </div>
  );
};

TodoInput.prop;

export default TodoInput;
