import { FaPlusCircle } from "react-icons/fa";

const TodoInput = () => {
  return (
    <div className="w-full bg-white rounded-lg flex items-center pr-2">
      <input
        type="text"
        className="w-full shadow-xl bg-transparent rounded-lg focus:ring-0 focus:outline-lightTheme-very-light-grayish-blue h-12"
      />
      <FaPlusCircle />
    </div>
  );
};

export default TodoInput;
