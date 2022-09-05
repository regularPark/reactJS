import React from "react";

import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  console.log(props.users.length);
  return (
    props.users.length && (
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    )
  );
};
// 처음에 map은 undefined한 것을 대상으로 사용하지 못한다고 한 이유
// -> props으로 넘겨주는 대상 자체가 없어서이다.

export default UserList;
