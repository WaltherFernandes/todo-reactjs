import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { TodoItem } from "./TodoItem";

export function ItemList() {
  const { todos, changeChecked, deleteTodos } = useContext(TodosContext);

  return (
    <>
      <ul></ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeChecked={changeChecked}
          deleteTodos={deleteTodos}
        />
      ))}
    </>
  );
}
