import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/action";
import "./InputComponent.css";

class InputComponent extends React.Component {
  render() {
    return (
      <div className={"input-block"}>
        <input
          type="number"
          placeholder="Enter the year"
          onChange={this.props.onInputChange}
        />
        <button onClick={this.props.onUpdateButtonClicked}>Update</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: e =>
      dispatch({ type: actionTypes.INPUTCHANGE, payload: e.target.value }),
    onUpdateButtonClicked: () =>
      dispatch({ type: actionTypes.UPDATEBUTTONCLICKED })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent);
