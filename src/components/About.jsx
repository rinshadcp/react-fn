import UserProfileCard from "./UserProfileCard";
import UserProfileCardClass from "./UserProfileCardClass";
import React from "react";
import userContext from "../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div className="flex items-center justify-center">
        <UserProfileCardClass name={"Rcp Class"} location={"abl Class"} />
        <userContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-center m-2">{loggedInUser}</h1>
          )}
        </userContext.Consumer>
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This About Page</h2>
//       <UserProfileCardClass name={"Rcp Class"} location={"abl Class"} />
//     </div>
//   );
// };

export default About;
