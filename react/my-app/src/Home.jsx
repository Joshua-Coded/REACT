import { Component } from "react";
import { getFullYear } from "./utils";
import "./Home.css";

export default class MainContent extends Component {
  state = { appTitle: "KigaliHomes" };
  render() {
    return (
      <div className="container">
        <h1 className="header">{this.state.appTitle}</h1>
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
}
