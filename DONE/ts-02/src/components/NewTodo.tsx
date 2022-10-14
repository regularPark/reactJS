import { useRef, useContext } from "react";

import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  /** vanilla JS에서는 타입 표기가 없어서 괜찮았지만 TS에서는 타입을 명기해야하기 때문에
   * input - ref에 빨간 밑줄이 그어진다.
   * useRef를 generic 타입으로 >
   * 시작값을 null로
   */
  let todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // 레퍼런스에 값이 설정되지 않았을 수도 있기 때문에 current 뒤에 ? 가 붙는다.
    // null값이 아닌 것이 확실하다면 ! 를 사용한다
    let enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);

    // 값을 입력한 후(null이 아니게 됨)에는 초기화가 가능하도록 함.
    if (todoTextInput.current) todoTextInput.current.value = "";
  };

  return (
    <form id="form" className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
