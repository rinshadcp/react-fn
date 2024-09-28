import { Component } from "react";

class UserProfileCardClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rinshadcp");
    const json = await data.json();
    this.setState((this.state.userInfo = json));
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(name);
    console.log("child render");
    return (
      <div className="border rounded-lg shadow-md bg-slate-200 m-4 p-4">
        <img src={avatar_url} />
        <h1 className="font-bold text-center">{name}</h1>
        <h2 className="font-bold text-center"> {location}</h2>
        <h3></h3>
      </div>
    );
  }
}

export default UserProfileCardClass;
