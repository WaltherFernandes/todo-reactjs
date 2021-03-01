import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface TodosDTO {
  id: number;
  title: string;
  checked: boolean;
}

interface TodosContextData {
  value: string;
  todos: Array<TodosDTO>;
  changeValue: (extenalValue: string) => void;
  changeChecked: (todo: TodosDTO) => void;
  deleteTodos: (todo: TodosDTO) => void;
  erase: () => void;
  submit: () => void;
}

interface TodosProviderProps {
  children: ReactNode;
  todosArray: {
    id: number;
    title: string;
    checked: boolean;
  }[];
}

export const TodosContext = createContext({} as TodosContextData);

export function TodosProvider({ children, ...rest }: TodosProviderProps) {
  const { todosArray } = rest;
  const x = process.browser
    ? JSON.parse(localStorage.getItem("todo:todos"))
    : [];

  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(todosArray || []);

  useEffect(() => {
    Cookies.set("todos", todos);
  }, [todos]);

  function changeValue(externalValue: string) {
    setValue(externalValue);
  }

  function erase() {
    setValue("");
  }

  function changeChecked(externatTodo: TodosDTO) {
    const newTodos: TodosDTO[] = [];
    todos.map((todo) =>
      newTodos.push(
        todo === externatTodo
          ? { ...externatTodo, checked: !externatTodo.checked }
          : todo
      )
    );

    setTodos(newTodos);
  }

  function deleteTodos(externatTodo: TodosDTO) {
    const newTodos = todos.filter((todo) => externatTodo !== todo);

    setTodos(newTodos);
  }

  function submit() {
    const todo = {
      id: todos.length + 1,
      title: value,
      checked: false,
    };

    setTodos([...todos, todo]);
  }

  return (
    <TodosContext.Provider
      value={{
        value,
        changeValue,
        erase,
        submit,
        todos,
        changeChecked,
        deleteTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
