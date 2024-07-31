import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoBox = () => {
  return (
    <div className="w-3/5 h-4/5 bg-red-200 px-3">
      <div>
        <h1 className="">CANDO</h1>
      </div>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoBox;
