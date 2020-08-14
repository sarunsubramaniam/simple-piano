import React from "react";

export default function Key(props) {
  return (
    <React.Fragment>
      <span onClick={props.keyPress} className={props.keyColor}>
        {props.children}
      </span>
    </React.Fragment>
  );
}
