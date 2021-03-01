import { GetServerSideProps } from "next";
import { InputValues } from "../components/InputValues";
import { ItemList } from "../components/ItemList";
import { TodosProvider } from "../contexts/TodosContext";
import styles from "../styles/pages/Home.module.css";

interface Todo {
  id: number;
  title: string;
  checked: boolean;
}
interface TodosDTO {
  todosArray: Todo[];
}

export default function Home({ todosArray }: TodosDTO) {
  return (
    <TodosProvider todosArray={todosArray}>
      <section id="app" className={styles.container}>
        <header>
          <h1 className={styles.title}>todo</h1>
        </header>
        <section className={styles.main}>
          <InputValues />
          <ItemList />
        </section>
      </section>
    </TodosProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { todos } = ctx.req.cookies;

  return {
    props: {
      todosArray: JSON.parse(todos) || [],
    },
  };
};
