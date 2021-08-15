import React from "react";
import "./styles/App.scss";

function OutPut(props) {
  return <div className="outPutScreen">{props.currentValue}</div>;
}

export default OutPut;
