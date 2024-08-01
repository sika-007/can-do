import { useState } from "react";
import TodoElements from "./TodoElement";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const TodoList = ({ todoListItems, setTodoListItems }) => {
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null); // State for tracking editing todo
  const [currentText, setCurrentText] = useState("");
  const [theme] = useState(localStorage.getItem("theme") || "light");

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
      <TodoElements
        key={id}
        cancelEdit={cancelEdit}
        completed={completed}
        currentText={currentText}
        editingId={editingId}
        handleEdit={handleEdit}
        id={id}
        saveChanges={saveChanges}
        setCurrentText={setCurrentText}
        setTodoListItems={setTodoListItems}
        title={title}
      />
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
              toast.info("All completed Todos Deleted", {
                style: {
                  color: theme == "light" ? "hsl(237, 14%, 26%)" : "white",
                  backgroundColor:
                    theme == "light" ? "white" : "hsl(237, 14%, 26%)",
                },
              });
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
