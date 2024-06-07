import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "./app.css";
import SideBar from "./components/SideBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="Nav_bar">
            <NavBar />
          </div>
          <div className="side_bar">
            <SideBar />
          </div>
          <div className="news_item">
            <Routes>
              <Route
                path="/"
                element={
                  <News key="home" pageSize={8} country="us" category="Home" />
                }
              />
              <Route
                path="/business"
                element={
                  <News
                    key="business"
                    pageSize={8}
                    country="us"
                    category="business"
                  />
                }
              />
              <Route
                path="/entertainment"
                element={
                  <News
                    key="entertainment"
                    pageSize={8}
                    country="us"
                    category="entertainment"
                  />
                }
              />
              <Route
                path="/general"
                element={
                  <News
                    key="general"
                    pageSize={8}
                    country="us"
                    category="general"
                  />
                }
              />
              <Route
                path="/health"
                element={
                  <News
                    key="health"
                    pageSize={8}
                    country="us"
                    category="health"
                  />
                }
              />
              <Route
                path="/science"
                element={
                  <News
                    key="science"
                    pageSize={8}
                    country="us"
                    category="science"
                  />
                }
              />
              <Route
                path="/sports"
                element={
                  <News
                    key="sports"
                    pageSize={8}
                    country="us"
                    category="sports"
                  />
                }
              />
              <Route
                path="/technology"
                element={
                  <News
                    key="technology"
                    pageSize={8}
                    country="us"
                    category="technology"
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
