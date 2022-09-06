import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserhandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserhandler} />
      <UserList users={usersList} />
    </Fragment>
  );
  // 모달은 페이지 맨 위에 있기 때문에 다른 HTML안에 중첩돼있다면
  // 좋지 않다. 작동은 하지만 좋은 코드라고 할수없음
  // 포털을 사용하면 해결된다
}

export default App;
