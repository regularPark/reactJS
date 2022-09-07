import React from "react";

import classes from "./Card.module.css";

/** props로 받아들인 클래스 네임의 css모듈과 기존의 모듈을 동시에 적용 가능 */
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
