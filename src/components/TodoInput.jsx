import { FaPlusCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const TodoInput = ({ newTodo, createTodo, setNewTodo }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTodo();
        setNewTodo("");
      }}
      className="w-full transition-colors dark:bg-darkTheme-very-dark-desaturated-blue shadow-xl bg-white rounded-lg flex items-center pr-2"
    >
      <input
        type="text"
        minLength={5}
        maxLength={70}
        required
        value={newTodo}
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

TodoInput.propTypes = {
  createTodo: PropTypes.func,
  newTodo: PropTypes.string,
  setNewTodo: PropTypes.func,
};

export default TodoInput;
