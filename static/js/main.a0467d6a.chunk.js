(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(e,_,t){},,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),_App_scss__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_App_scss__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_Formular__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(12),_OutPut__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(13),_Button__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(14),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__),isOperator=/[x/+-]/,endsWithOperator=/[x+-/]$/,endsWithNegativeSign=/\d[x/+-]{1}-$/,App=function(_React$Component){Object(D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(e){var _;return Object(D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(_=_super.call(this,e)).state={currentVal:"0",previousVal:"0",formular:"",evaluated:!1},_.maxDigitWarning=_.maxDigitWarning.bind(Object(D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleEvaluate=_.handleEvaluate.bind(Object(D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleOperators=_.handleOperators.bind(Object(D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleNumbers=_.handleNumbers.bind(Object(D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleDecimal=_.handleDecimal.bind(Object(D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.inistialize=_.inistialize.bind(Object(D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_}return Object(D_CODE_Calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"maxDigitWarning",value:function(){var e=this;this.setState({currentVal:"Digit limit met",previousVal:this.state.currentVal}),setTimeout((function(){e.setState({currentVal:e.state.previousVal})}),1e3)}},{key:"handleEvaluate",value:function handleEvaluate(){if(!this.state.currentVal.includes("limit")){for(var expression=this.state.formular;endsWithOperator.test(expression);)expression=expression.slice(0,-1);expression=expression.replace(/x/g,"*").replace("--","+0+0+0+0+0+0+");var answer=Math.round(1e12*eval(expression))/1e12;this.setState({currentVal:answer.toString(),formular:expression.replace(/\*/g,"\u22c5").replace("+0+0+0+0+0+0+","--")+"="+answer,previousVal:answer,evaluated:!0})}}},{key:"handleOperators",value:function(e){if(!this.state.currentVal.includes("limit")){var _=this.state,t=_.evaluated,a=_.previousVal,r=_.formular,s=e.target.value;this.setState({currentVal:s,evaluated:!1}),t?this.setState({formular:a+s}):endsWithOperator.test(r)?endsWithNegativeSign.test(r)?"-"!==s&&this.setState({formular:a+s}):this.setState({formular:(endsWithNegativeSign.test(r+s)?r:a)+s}):this.setState({previousVal:r,formular:r+s})}}},{key:"handleNumbers",value:function(e){if(!this.state.currentVal.includes("limit")){var _=this.state,t=_.currentVal,a=_.formular,r=_.evaluated,s=e.target.value;this.setState({evaluated:!1}),t.length>21?this.maxDigitWarning():r?this.setState({currentVal:s,formular:"0"!==s?s:""}):this.setState({currentVal:"0"===t||isOperator.test(t)?s:t+s,formular:"0"===t&&"0"===s?""===a?s:a:/([^.0-9]0|^0)$/.test(a)?a.slice(0,-1)+s:a+s})}}},{key:"handleDecimal",value:function(){!0===this.state.evaluated?this.setState({currentVal:"0.",formular:"0.",evaluated:!1}):this.state.currentVal.includes(".")||this.state.currentVal.includes("limit")||(this.setState({evaluated:!1}),this.state.currentVal.length>21?this.maxDigitWarning():endsWithOperator.test(this.state.formular)||"0"===this.state.currentVal&&""===this.state.formular?this.setState({currentVal:"0.",formular:this.state.formular+"0."}):this.setState({currentVal:this.state.formular.match(/(-?\d+\.?\d*)$/)[0]+".",formular:this.state.formular+"."}))}},{key:"inistialize",value:function(){this.setState({currentVal:"0",previousVal:"0",formular:"",evaluated:!1})}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Formular__WEBPACK_IMPORTED_MODULE_7__.a,{formular:this.state.formular}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_OutPut__WEBPACK_IMPORTED_MODULE_8__.a,{currentValue:this.state.currentVal}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_9__.a,{decimal:this.handleDecimal,evaluate:this.handleEvaluate,operators:this.handleOperators,numbers:this.handleNumbers,inistialize:this.inistialize})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{id:"HongVan",children:"TRAN HONG VAN"})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);__webpack_exports__.a=App},function(e,_,t){"use strict";var a=t(4),r=t(5),s=t(7),l=t(6),i=t(1),n=t.n(i),u=(t(8),t(0)),c=function(e){Object(s.a)(t,e);var _=Object(l.a)(t);function t(){return Object(a.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"formularScreen",children:this.props.formular})}}]),t}(n.a.Component);_.a=c},function(e,_,t){"use strict";var a=t(4),r=t(5),s=t(7),l=t(6),i=t(1),n=t.n(i),u=(t(8),t(0)),c=function(e){Object(s.a)(t,e);var _=Object(l.a)(t);function t(){return Object(a.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"outPutScreen",children:this.props.currentValue})}}]),t}(n.a.Component);_.a=c},function(e,_,t){"use strict";var a=t(2),r=t(4),s=t(5),l=t(7),i=t(6),n=(t(8),t(1)),u=t.n(n),c=t(0),o=function(e){Object(l.a)(t,e);var _=Object(i.a)(t);function t(){return Object(r.a)(this,t),_.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e,_,t,r,s;return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",(e={id:"clear",value:"AC",onClick:this.props.inistialize,className:"doubleButtonWidth"},Object(a.a)(e,"id","clear"),Object(a.a)(e,"children","AC"),e)),Object(c.jsx)("button",(_={id:"devide",value:"/",onClick:this.props.operators},Object(a.a)(_,"id","operator"),Object(a.a)(_,"children","/"),_)),Object(c.jsx)("button",(t={id:"multiply",value:"x",onClick:this.props.operators},Object(a.a)(t,"id","operator"),Object(a.a)(t,"children","x"),t)),Object(c.jsx)("button",{id:"seven",value:"7",onClick:this.props.numbers,children:"7"}),Object(c.jsx)("button",{id:"eight",value:"8",onClick:this.props.numbers,children:"8"}),Object(c.jsx)("button",{id:"nine",value:"9",onClick:this.props.numbers,children:"9"}),Object(c.jsx)("button",(r={id:"subtract",value:"-",onClick:this.props.operators},Object(a.a)(r,"id","operator"),Object(a.a)(r,"children","-"),r)),Object(c.jsx)("button",{id:"four",value:"4",onClick:this.props.numbers,children:"4"}),Object(c.jsx)("button",{id:"five",value:"5",onClick:this.props.numbers,children:"5"}),Object(c.jsx)("button",{id:"six",value:"6",onClick:this.props.numbers,children:"6"}),Object(c.jsx)("button",(s={id:"add",value:"+",onClick:this.props.operators},Object(a.a)(s,"id","operator"),Object(a.a)(s,"children","+"),s)),Object(c.jsx)("button",{id:"one",value:"1",onClick:this.props.numbers,children:"1"}),Object(c.jsx)("button",{id:"two",value:"2",onClick:this.props.numbers,children:"2"}),Object(c.jsx)("button",{id:"three",value:"3",onClick:this.props.numbers,children:"3"}),Object(c.jsx)("button",{id:"zero",value:"0",onClick:this.props.numbers,className:"doubleButtonWidth",children:"0"}),Object(c.jsx)("button",{id:"decimal",value:".",onClick:this.props.decimal,children:"."}),Object(c.jsx)("button",{id:"equals",value:"=",onClick:this.props.evaluate,className:"equalsStyle",children:"="})]})}}]),t}(u.a.Component);_.a=o},,,,,function(e,_,t){},,function(e,_,t){"use strict";t.r(_);var a=t(1),r=t.n(a),s=t(10),l=t.n(s),i=(t(19),t(11)),n=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(_){var t=_.getCLS,a=_.getFID,r=_.getFCP,s=_.getLCP,l=_.getTTFB;t(e),a(e),r(e),s(e),l(e)}))},u=t(0);l.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(i.a,{})}),document.getElementById("root")),n()}],[[21,1,2]]]);
//# sourceMappingURL=main.a0467d6a.chunk.js.map