import todoList from "../dummyTodo.json";

const TodoList = () => {
  const { todos } = todoList;
  const todoElements = todos.map(({ completed, id, title, userId }, index) => {
    return <div key={id}>{title}</div>;
  });

  return <div>{todoElements}</div>;
};

export default TodoList;
