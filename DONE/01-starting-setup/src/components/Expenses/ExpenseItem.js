import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // element, updatingElement
  const [title, setTitle] = useState(props.title); // only this position

  const clickHandler = () => {
    setTitle("Updated");
  };

  // must be 1 root element
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />{" "}
        <div className="expense-item__description">
          <h2> {props.title} </h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
