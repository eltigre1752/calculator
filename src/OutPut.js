import React from "react";
import "./App.scss";

class OutPut extends React.Component{
    render() {
      return (
        <div className = "outPutScreen">
          {this.props.currentValue}
        </div>
      )
    }
}

export default OutPut;