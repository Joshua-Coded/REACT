import { Component } from "react";
import { getFullYear } from "./utils";
import "./Home.css";

export default class MainContent extends Component {
  state = { appTitle: "KigaliHomes", userCount: 10 };
  render() {
    return (
      <div className="container">
        <h1 className="header">
          {this.state.appTitle}
          <span> {this.state.userCount} </span>
        </h1>
        <button className="btn btn-info" onClick={this.onRefreshClick()}>
          Refresh
        </button>

        <p className="paragraph">
          Welcome to KigaliHomes!
          <br />
          Jump right in and explore our many houses. <br />
          Feel free to share some of your own <br /> and comment on others!{" "}
        </p>
        <button className=" clickme">View Houses</button>
        <div className="App-footer">
          <p>Copyright {getFullYear()}</p>
        </div>
      </div>
    );
  }

  onRefreshClick() {
    console.log("onRefreshClick");
  }
}
