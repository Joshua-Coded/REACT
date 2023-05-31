import { Component } from "react";
import { getFullYear } from "./utils";
import "./Home.css";

export default class MainContent extends Component {
  state = {
    appTitle: "KigaliHomes",
    userCount: 10,
    users: [
      {
        id: 1,
        name: "Scott",
        phone: 434535,
        photo: "https://picsum.photos/id/1011/60",
      },

      {
        id: 2,
        name: "Smith",
        phone: "",
        photo: "https://picsum.photos/id/1012/60",
      },

      {
        id: 3,
        name: "JACOB",
        phone: 34323453,
        photo: "https://picsum.photos/id/1013/60",
      },

      {
        id: 4,
        name: "SAMUEL",
        phone: 7623535,
        photo: "https://picsum.photos/id/1014/60",
      },

      {
        id: 5,
        name: "MEME",
        phone: "",
        photo: "https://picsum.photos/id/1015/60",
      },
    ],
  };

  // user name style
  userNameStyle = (userName) => {
    if (userName.startsWith("S")) return "green-highlight";
    else if (userName.startsWith("J")) return "red-highlight";
    else return "";
  };

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

        <table className="table">
          <thead>
            <tr>
              <th> #</th>
              <th>Photo</th>
              <th>User Name:</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <img src={user.photo} alt="" />
                  </td>
                  <td className={this.userNameStyle(user.name)}>{user.name}</td>
                  <td>{getPhoneToRender(user.phone)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

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

  onRefreshClick = () => {
    this.setState({ userCount: 7 });
  };
}

function getPhoneToRender(phone) {
  if (phone) return phone;
  else {
    return <div className="bg-warning p-2">No phone</div>;
  }
}
