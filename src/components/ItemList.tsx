import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';
import styles from '../styles/components/ItemList.module.css';
import { TodoItem } from './TodoItem';


interface TodoDTO {
  id: number;
  title: string;
  checked: boolean;
}

export function ItemList() {
  const { todos, changeChecked, deleteTodos } = useContext(TodosContext);

  return (
    <>
      <ul className={styles.todoList}></ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} changeChecked={changeChecked} deleteTodos={deleteTodos}/>
      ))}
    </>
  );
}
