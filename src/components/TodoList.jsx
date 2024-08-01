import { BiCircle } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import PropTypes from "prop-types";
import { useState } from "react";

const TodoList = ({ todoListItems, setTodoListItems }) => {
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null); // State for tracking editing todo
  const [currentText, setCurrentText] = useState("");

  const filteredTodos = todoListItems.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  const handleEdit = (id, title) => {
    setEditingId(id);
    setCurrentText(title);
  };

  const saveChanges = (id) => {
    setTodoListItems((prevItems) =>
      prevItems.map((todo) =>
        todo.id === id ? { ...todo, title: currentText } : todo
      )
    );
    setEditingId(null); // Clear editing state
  };

  const cancelEdit = () => {
    setEditingId(null);
    setCurrentText("");
  };

  const todoElements = filteredTodos.map(({ completed, id, title }) => {
    return (
      <div
        className="bg-white dark:bg-darkTheme-very-dark-desaturated-blue flex items-center py-1 min-h-10 gap-2 border-b dark:border-b-darkTheme-very-dark-blue px-1 pr-3 transition-colors"
        key={id}
      >
        {/* Check mark for whether on ot task is pending */}
        {completed ? (
          <BiCheckCircle
            onClick={() => {
              setTodoListItems((prevItems) =>
                prevItems.map((todo) =>
                  todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
                )
              );
            }}
            className="h-5 w-5 shrink-0 text-black dark:text-lightTheme-very-light-gray cursor-pointer"
          />
        ) : (
          <BiCircle
            onClick={() => {
              setTodoListItems((prevItems) =>
                prevItems.map((todo) =>
                  todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
                )
              );
            }}
            className="h-5 w-5 shrink-0 cursor-pointer"
          />
        )}

        {/* Title struck through if todo item is completed */}
        {completed ? (
          <s className="text-black w-full dark:text-lightTheme-very-light-gray">
            {title}
          </s>
        ) : editingId === id ? (
          <input
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            onBlur={() => saveChanges(id)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveChanges(id);
              } else if (e.key === "Escape") {
                cancelEdit();
              }
            }}
            autoFocus
            className="text-black h-full max-h-fit resize-none w-full dark:text-lightTheme-very-light-gray"
          />
        ) : (
          <div
            className="text-black w-full dark:text-lightTheme-very-light-gray cursor-pointer"
            onClick={() => handleEdit(id, title)}
          >
            {title}
          </div>
        )}

        {/* Delete todos with this button */}
        <BiTrash
          onClick={() => {
            setTodoListItems((prevItems) =>
              prevItems.filter((todo) => todo.id !== id)
            );
          }}
          className="text-red-700"
        />
      </div>
    );
  });

  return (
    <>
      <div className="rounded-t-md shadow-lg overflow-auto">{todoElements}</div>
      {todoListItems.length > 0 && (
        <div
          className={`rounded-b-md shadow-lg overflow-auto bg-white dark:bg-darkTheme-very-dark-desaturated-blue flex items-center justify-between px-4 py-1 transition-colors gap-1`}
        >
          <button
            onClick={() => setFilter("all")}
            className={`${
              filter === "all" &&
              "bg-darkTheme-very-dark-grayish-blue1 text-white"
            } text-xs desktop:text-base hover:bg-darkTheme-very-dark-grayish-blue1 transition-colors rounded hover:text-white w-full dark:text-lightTheme-very-light-gray h-10`}
          >
            Show all
          </button>
          <div className="h-4/5 bg-black w-[0.5px] dark:bg-white" />
          <button
            onClick={() => setFilter("pending")}
            className={`${
              filter === "pending" &&
              "bg-darkTheme-very-dark-grayish-blue1 text-white"
            } text-xs desktop:text-base h-10 hover:bg-darkTheme-very-dark-grayish-blue1 transition-colors rounded hover:text-white w-full dark:text-lightTheme-very-light-gray`}
          >
            Show pending
          </button>
          <div className="h-4/5 bg-black w-[0.5px] dark:bg-white" />
          <button
            onClick={() => setFilter("completed")}
            className={`${
              filter === "completed" &&
              "bg-darkTheme-very-dark-grayish-blue1 text-white"
            } text-xs desktop:text-base hover:bg-darkTheme-very-dark-grayish-blue1 transition-colors hover:text-white rounded text-black w-full dark:text-lightTheme-very-light-gray h-10`}
          >
            Show Completed
          </button>
          <div className="h-4/5 bg-black w-[0.5px] dark:bg-white" />
          <button
            onClick={() => {
              setTodoListItems((prevItems) =>
                prevItems.filter((todo) => !todo.completed)
              );
            }}
            className="text-xs desktop:text-base hover:bg-darkTheme-very-dark-grayish-blue1 transition-colors hover:text-white rounded text-black w-full dark:text-lightTheme-very-light-gray h-10"
          >
            Delete all completed
          </button>
        </div>
      )}
    </>
  );
};

TodoList.propTypes = {
  todoListItems: PropTypes.array,
  setTodoListItems: PropTypes.func,
};

export default TodoList;
