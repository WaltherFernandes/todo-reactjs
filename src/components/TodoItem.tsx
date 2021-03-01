import { MdDelete } from "react-icons/md";
import styles from "../styles/components/TodoItems.module.css";

interface Todo {
  id: number;
  title: string;
  checked: boolean;
}

interface TodoTDO {
  todo: Todo;
  changeChecked: (todo: Todo) => void;
  deleteTodos: (todo: Todo) => void;
}

export function TodoItem({ todo, changeChecked, deleteTodos }: TodoTDO) {
  return (
    <li className={styles.listItem}>
      <span
        onClick={() => changeChecked(todo)}
        className={`${styles.todo} ${todo.checked && styles.checked}`}
      >
        {todo.title}
      </span>
      <button
        className={styles.remove}
        onClick={() => deleteTodos(todo)}
        type="button"
      >
        <MdDelete size={28} />
      </button>
    </li>
  );
}
