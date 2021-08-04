import React from "react";
import "./App.scss";

class Formular extends React.Component {
    render () {
      return (
        <div className = "formularScreen">
          {this.props.formular}
        </div>
      )
    }
}

export default Formular;