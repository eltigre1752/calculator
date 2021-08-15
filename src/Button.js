import "./styles/App.scss";
import React from "react";

function Button(props) {
  return (
    <div>
      <button
        id="clearButton"
        className="doubleButtonWidth"
        value="AC"
        onClick={props.inistialize}
      >
        AC
      </button>

      <button
        id="devide"
        className="operator"
        value="/"
        onClick={props.operators}
      >
        /
      </button>

      <button
        id="multiply"
        className="operator"
        value="x"
        onClick={props.operators}
      >
        x
      </button>

      <button id="seven" value="7" onClick={props.numbers}>
        7
      </button>

      <button id="eight" value="8" onClick={props.numbers}>
        8
      </button>

      <button id="nine" value="9" onClick={props.numbers}>
        9
      </button>

      <button
        id="subtract"
        className="operator"
        value="-"
        onClick={props.operators}
      >
        -
      </button>

      <button id="four" value="4" onClick={props.numbers}>
        4
      </button>

      <button id="five" value="5" onClick={props.numbers}>
        5
      </button>

      <button id="six" value="6" onClick={props.numbers}>
        6
      </button>

      <button id="add" className="operator" value="+" onClick={props.operators}>
        +
      </button>

      <button id="one" value="1" onClick={props.numbers}>
        1
      </button>

      <button id="two" value="2" onClick={props.numbers}>
        2
      </button>

      <button id="three" value="3" onClick={props.numbers}>
        3
      </button>

      <button
        id="zero"
        className="doubleButtonWidth"
        value="0"
        onClick={props.numbers}
      >
        0
      </button>

      <button id="decimal" value="." onClick={props.decimal}>
        .
      </button>

      <button
        id="equals"
        className="equalsStyle"
        value="="
        onClick={props.evaluate}
      >
        =
      </button>
    </div>
  );
}

export default Button;
