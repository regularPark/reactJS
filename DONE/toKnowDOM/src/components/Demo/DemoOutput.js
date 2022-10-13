import React from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DEMOOUTPUT");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
// 불필요한 rerendering을 막기 위해 사용
// 왜 모든 곳에 사용하지 않나?
// prop을 저장할 공간과 비교까지 해야 하기 때문에 리소스 낭비가 있을 수 있다.

// 하지만 자식 컴포넌트의 수가 많거나 컴포넌트 트리가 매우 크다면,
// 또는 컴포넌트 트리의 상위에 위치해있다면 쓸데없는 재렌더링을 피할 수 있다.
