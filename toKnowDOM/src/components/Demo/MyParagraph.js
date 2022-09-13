import React from "react";

const MyParagraph = (props) => {
  console.log("MyParagraphOUTPUT");
  return <p>{props.children}</p>;
};

export default MyParagraph;
