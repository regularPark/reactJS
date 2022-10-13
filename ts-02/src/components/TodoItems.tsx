import React from "react";

import classes from "./TodoItems.module.css";

const TodoItems: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItems;
