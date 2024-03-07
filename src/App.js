import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "./app.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={8} country="us" category="sport" />
      </div>
    );
  }
}
