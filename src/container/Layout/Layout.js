import React, { Component } from "react";
import CardComponent from "../../component/CardComponent/CardComponent";
import InputComponent from "../../component/InputComponent/InputComponent";
import TextAreaComponent from "../../component/TextAreaComponent/TextAreaComponent";
import "./layout.css";

class Layout extends Component {
  render() {
    return (
      <div className={"layout"}>
        <CardComponent />
        <div className={"section-block"}>
          <TextAreaComponent />
          <InputComponent />
        </div>
      </div>
    );
  }
}

export default Layout;
