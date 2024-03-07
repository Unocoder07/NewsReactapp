import React, { Component } from "react";
import Newstem from "./Newsitem.css";
export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, url } = this.props;
    return (
      <div className="container1 ">
        <div className="card">
          <img
            className="card-img-top"
            src={
              !imageurl
                ? "https://g.foolcdn.com/editorial/images/763085/king-chess-piece-dividend-kings-stocks.jpg"
                : imageurl
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
