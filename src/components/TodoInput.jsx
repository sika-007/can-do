import { FaPlusCircle } from "react-icons/fa";

const TodoInput = () => {
  return (
    <div className="w-full transition-colors dark:bg-darkTheme-very-dark-desaturated-blue shadow-xl bg-white rounded-lg flex items-center pr-2">
      <input
        type="text"
        placeholder="What can you do today?"
        className="w-full bg-transparent dark:text-white rounded-lg focus:ring-0 focus:outline-none px-4 h-12"
      />
      <FaPlusCircle className="cursor-pointer dark:text-white" />
    </div>
  );
};

export default TodoInput;
