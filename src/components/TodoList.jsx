import { BiCircle } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

const TodoList = ({ todoListItems, setTodoListItems }) => {
  const todoElements = todoListItems.map(({ completed, id, title }) => {
    return (
      <div
        onClick={() => {
          setTodoListItems((prevItems) =>
            prevItems.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          );
        }}
        className="bg-white dark:bg-darkTheme-very-dark-desaturated-blue flex items-center py-1 min-h-10 gap-2 border-b dark:border-b-darkTheme-very-dark-blue px-1 pr-3 transition-colors"
        key={id}
      >
        {/* Check mark for whether on ot task is pending */}
        {completed ? (
          <BiCheckCircle className="h-5 w-5 shrink-0 text-black dark:text-lightTheme-very-light-gray" />
        ) : (
          <BiCircle className="h-5 w-5 shrink-0" />
        )}

        {/* Title struck through if todo item is completed */}
        {completed ? (
          <s className="text-black w-full dark:text-lightTheme-very-light-gray">
            {title}
          </s>
        ) : (
          <p className="text-black w-full dark:text-lightTheme-very-light-gray">
            {title}
          </p>
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
    <div className="rounded-md shadow-lg overflow-auto">{todoElements}</div>
  );
};

export default TodoList;
