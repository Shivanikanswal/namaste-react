import { Component } from "react";
import UserDetailClass from "./UserDetailClass";
import UserDetails from "./UserDetails";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component did mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <div className="about-us">
          <h1>About Us</h1>
        </div>
        <div>
          <UserDetailClass name={"First Class"} location={"Dehradun"} />
        </div>
      </div>
    );
  }
}

export default About;
