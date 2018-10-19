import React from "react";
import jsonData from "../../store/jsonFile";
import "./TextAreaComponent.css";

const textAreaComponent = () => {
  return (
    <textarea className={"textarea"}>
      {JSON.stringify(jsonData, undefined, 2)}
    </textarea>
  );
};

export default textAreaComponent;
