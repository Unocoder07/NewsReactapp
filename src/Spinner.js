import React, { Component } from "react";
import Spinnerimage from "./Spinnerimage.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={Spinnerimage} alt="loading" />
      </div>
    );
  }
}
