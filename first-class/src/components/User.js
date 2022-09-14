import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  // user component를 세 번 사용했기 때문에 세 번 출력
  componentWillUnmount() {
    console.log("unmount!");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
