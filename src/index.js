import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

class HelloMessage extends React.Component {
  render() {
    return <div class="hello">Hello {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="World" />, mountNode);
