import "./App.scss";
import React from "react";


class Button extends React.Component {
  render() {
      return (
        <div>
          <button id="clear" value="AC" onClick = {this.props.inistialize} className = "doubleButtonWidth" id="clear">
            AC
          </button>
          <button id="devide" value="/" onClick = {this.props.operators} id="operator">
            /
          </button>
          <button id="multiply" value="x" onClick = {this.props.operators} id="operator">
            x
          </button>
          <button id="seven" value="7" onClick = {this.props.numbers}>
            7
          </button>
          <button id="eight" value="8" onClick = {this.props.numbers}>
            8
          </button>
          <button id="nine" value="9" onClick = {this.props.numbers}>
            9
          </button>
          <button id="subtract" value="-" onClick = {this.props.operators} id="operator">
            -
          </button>
          <button id="four" value="4" onClick = {this.props.numbers}>
            4
          </button>
          <button id="five" value="5" onClick = {this.props.numbers}>
            5
          </button>
          <button id="six" value="6" onClick = {this.props.numbers}>
            6
          </button>
          <button id="add" value="+" onClick = {this.props.operators} id="operator">
            +
          </button>
          <button id="one" value="1" onClick = {this.props.numbers}>
            1
          </button>
          <button id="two" value="2" onClick = {this.props.numbers}>
            2
          </button>
          <button id="three" value="3" onClick = {this.props.numbers}>
            3
          </button>
          <button id="zero" value="0" onClick = {this.props.numbers} className = "doubleButtonWidth">
            0
          </button>
          <button id="decimal" value="." onClick = {this.props.decimal}>
            .
          </button>
          <button id="equals" value="=" onClick = {this.props.evaluate}  className = "equalsStyle">
            =
          </button>
        </div>
      );
    }
  }

  export default Button;