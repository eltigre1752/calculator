import "./App.scss";
import React from "react";
import Formular from "./Formular";
import OutPut from "./OutPut";
import Button from "./Button"

const isOperator = /[x/+-]/,
    endsWithOperator = /[x+-/]$/,
    endsWithNegativeSign = /\d[x/+-]{1}-$/;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: '0',
      previousVal: '0',
      formular: '',
      evaluated: false
    }
    this.maxDigitWarning = this.maxDigitWarning.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.inistialize =  this.inistialize.bind(this);
  }

  maxDigitWarning() {
    this.setState({
      currentVal: "Digit limit met",
      previousVal: this.state.currentVal
    })
    setTimeout(() => {
      this.setState({currentVal:this.state.previousVal})
    }, 1000);
  }

  handleEvaluate() {
    if(!this.state.currentVal.includes('limit')) {
      let expression = this.state.formular;
      while(endsWithOperator.test(expression)) {
        expression = expression.slice(0,-1);
      }
      expression = expression
        .replace(/x/g, '*')
        .replace('--', '+0+0+0+0+0+0+');
      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      this.setState({
        currentVal: answer.toString(),
        formular:
          expression
            .replace(/\*/g, '⋅')
            .replace('+0+0+0+0+0+0+', '--')
            + '=' + answer,
        previousVal: answer,
        evaluated: true
      })
    }
  }

  handleOperators(e) {
    if(!this.state.currentVal.includes('limit')) {
      const { evaluated, previousVal, formular} = this.state;
      const value = e.target.value;
      this.setState({
        currentVal: value,
        evaluated: false
      });
      if(evaluated) {
        this.setState({
          formular: previousVal + value
        });
      } else if(!endsWithOperator.test(formular)) {
        this.setState({
          previousVal: formular,
          formular: formular + value
        });
      } else if(!endsWithNegativeSign.test(formular)) {
        this.setState({
          formular: (endsWithNegativeSign.test(formular + value) ? formular : previousVal) +
          value
        });
      } else if(value !== '-') {
        this.setState({
          formular: previousVal + value
        })
      }
    }
  }

  handleNumbers(e) {
    if(!this.state.currentVal.includes('limit')){
      const {currentVal, formular, evaluated} = this.state;
      const value = e.target.value;
      this.setState({
        evaluated:false
      });
      if(currentVal.length > 21){
        this.maxDigitWarning();
      } else if (evaluated){
        this.setState({
          currentVal: value,
          formular: value !== '0' ? value : ''
        });
      } else {
        this.setState({
          currentVal:
            currentVal === '0' || isOperator.test(currentVal)
            ? value
            : currentVal + value,
          formular: 
            currentVal === '0' && value === '0'
            ? formular === ''
              ? value
              : formular
            : /([^.0-9]0|^0)$/.test(formular)
              ? formular.slice(0,-1) + value
              : formular + value
        });
      }
    }
  }
  
  handleDecimal() {
    if(this.state.evaluated === true) {
      this.setState({
        currentVal: '0.',
        formular: '0.',
        evaluated: false
      });
    } else if(
      !this.state.currentVal.includes('.') && 
      !this.state.currentVal.includes('limit')
    ) {
        this.setState({ 
          evaluated: false 
        });
        if(this.state.currentVal.length > 21) {
          this.maxDigitWarning()
        } else if(
          endsWithOperator.test(this.state.formular) || 
          (this.state.currentVal === '0' && this.state.formular === '')
        ) {
          this.setState({
            currentVal: '0.',
            formular: this.state.formular + '0.'
          });
        } else {
          this.setState({
            currentVal: this.state.formular.match(/(-?\d+\.?\d*)$/)[0] + '.',
            formular: this.state.formular + '.'
          });
        }
    }
  }

  inistialize() {
    this.setState({
      currentVal: '0',
      previousVal: '0',
      formular: '',
      evaluated: false
    });
  }

  render() {
    return (
      <div>
          <div className = "calculator">
          <Formular formular = {this.state.formular}/>
          <OutPut currentValue = {this.state.currentVal}/>
          <Button 
            decimal = {this.handleDecimal}
            evaluate = {this.handleEvaluate}
            operators = {this.handleOperators}
            numbers = {this.handleNumbers}
            inistialize = {this.inistialize}
          />
        </div>
        <div id = "HongVan">TRAN HONG VAN</div>
      </div>
    );
  }
}

export default App;
