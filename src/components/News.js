import React, { Component } from "react";
import Newsitem from "./Newsitem";
import propTypes from "prop-types";
import "./News.css";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=business&apiKey=6e987b9f3dce4266bb840329ecb8a70a&page=${
      this.state.page - 1
    }pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
    });
  }
  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=business&apiKey=6e987b9f3dce4266bb840329ecb8a70a&page=${
      this.state.page - 1
    }pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
    });
  };
  handelNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.state.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=business&apiKey=6e987b9f3dce4266bb840329ecb8a70a&page=${
        this.state.page + 1
      }pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
      });
    }
  };
  render() {
    return (
      <div className="contianer m-3">
        <h2 className="moving-text">NewsMonkey-Top Headline</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 40) : " "}
                  description={
                    element.description
                      ? element.description.slice(0, 100)
                      : "McDonald's restaurants in the U.S. are now serving improved versions of the chain's famous burgers"
                  }
                  imageurl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="conatiner2 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handelNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}
