import { FaPlusCircle } from "react-icons/fa";

const TodoInput = ({ createTodo, setNewTodo }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTodo();
      }}
      className="w-full transition-colors dark:bg-darkTheme-very-dark-desaturated-blue shadow-xl bg-white rounded-lg flex items-center pr-2"
    >
      <input
        type="text"
        minLength={5}
        maxLength={70}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        placeholder="What can you do today?"
        className="w-full bg-transparent dark:text-white rounded-lg focus:ring-0 focus:outline-none px-4 h-12"
      />
      <button aria-label="Add Todo" type="submit">
        <FaPlusCircle className="cursor-pointer dark:text-white" />
      </button>
    </form>
  );
};

export default TodoInput;
