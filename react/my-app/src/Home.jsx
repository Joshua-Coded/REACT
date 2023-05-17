import { Component } from "react";
import { getFullYear } from "./utils";

export default class MainContent extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="header">KigaliHomes</h1>
        <p className="paragraph">
          {" "}
          Welcome to KigaliHomes!
          <br />
          Jump right in and explore our many houses. <br />
          Feel free to share some of your own and comment on others!{" "}
        </p>
        <button class="btn btn-primary">View Houses</button>
        <div className="App-footer">
          <p>Copyright {getFullYear()}</p>
        </div>
      </div>
    );
  }
}
