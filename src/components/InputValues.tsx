import { SyntheticEvent, useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';
import styles from '../styles/components/InputValues.module.css';

export function InputValues() {
  const { changeValue, value, erase, submit } = useContext(TodosContext);

  const EscapeKey = 27;
  const EnterKey = 13;

  function onKeyDown(event: SyntheticEvent | any) {
    if (event.which === EnterKey) {
      submit();
      erase();
    } else if (event.which === EscapeKey) {
      erase();
    }
  }

  function changeInputValue(event: SyntheticEvent | any) {
    changeValue(event.target.value);
  }

  return (
    <input
      type="text"
      className={styles.newTodo}
      placeholder="O que precisa ser feito?"
      value={value}
      onChange={changeInputValue}
      onKeyDown={onKeyDown}
    />
  );
}
