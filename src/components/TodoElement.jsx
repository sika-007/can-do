import { BiCircle, BiTrash, BiCheckCircle } from "react-icons/bi";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

const TodoElements = ({
  completed,
  handleEdit,
  currentText,
  setCurrentText,
  id,
  title,
  setTodoListItems,
  editingId,
  saveChanges,
  cancelEdit,
  index,
}) => {
  const [theme] = useState(localStorage.getItem("theme") || "light");
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className="bg-white dark:bg-darkTheme-very-dark-desaturated-blue flex items-center py-1 min-h-10 gap-2 border-b dark:border-b-darkTheme-very-dark-blue px-1 pr-3 transition-colors"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
                toast.success("Todo marked as uncompleted", {
                  style: {
                    color: theme == "light" ? "hsl(237, 14%, 26%)" : "white",
                    backgroundColor:
                      theme == "light" ? "white" : "hsl(237, 14%, 26%)",
                  },
                });
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
                toast.success("Todo marked as completed", {
                  style: {
                    color: theme == "light" ? "hsl(237, 14%, 26%)" : "white",
                    backgroundColor:
                      theme == "light" ? "white" : "hsl(237, 14%, 26%)",
                  },
                });
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
              minLength={5}
              onChange={(e) => setCurrentText(e.target.value)}
              onBlur={(e) => {
                if (e.target.value.length > 5 && e.target.value.length < 70) {
                  if (currentText !== title) {
                    toast.success("Todo Updated", {
                      style: {
                        color:
                          theme == "light" ? "hsl(237, 14%, 26%)" : "white",
                        backgroundColor:
                          theme == "light" ? "white" : "hsl(237, 14%, 26%)",
                      },
                    });
                  }
                  saveChanges(id);
                } else {
                  cancelEdit();
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (e.target.value.length > 5 && e.target.value.length < 70) {
                    saveChanges(id);
                    toast.success("Todo Updated", {
                      style: {
                        color:
                          theme == "light" ? "hsl(237, 14%, 26%)" : "white",
                        backgroundColor:
                          theme == "light" ? "white" : "hsl(237, 14%, 26%)",
                      },
                    });
                  } else {
                    cancelEdit();
                  }
                } else if (e.key === "Escape") {
                  cancelEdit();
                }
              }}
              autoFocus
              className="text-black bg-transparent h-full max-h-fit resize-none w-full dark:text-lightTheme-very-light-gray py-1"
            />
          ) : (
            <div
              className="text-black w-full dark:text-lightTheme-very-light-gray cursor-pointer py-1"
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
              toast.info("Todo deleted", {
                style: {
                  color: theme == "light" ? "hsl(237, 14%, 26%)" : "white",
                  backgroundColor:
                    theme == "light" ? "white" : "hsl(237, 14%, 26%)",
                },
              });
            }}
            className="text-red-700"
          />
        </div>
      )}
    </Draggable>
  );
};

TodoElements.propTypes = {
  completed: PropTypes.bool,
  handleEdit: PropTypes.func,
  currentText: PropTypes.string,
  setCurrentText: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  setTodoListItems: PropTypes.func,
  editingId: PropTypes.string,
  saveChanges: PropTypes.func,
  cancelEdit: PropTypes.func,
  index: PropTypes.number,
};

export default TodoElements;
