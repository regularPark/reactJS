import React, { useContext } from "react";

import TodoItems from "./TodoItems";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

/** React.FC를 사용함으로써 함수는 props가 객체임을 알게 된다.
 * React.FC 자체가 generic 타입이다.
 */
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItems
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
