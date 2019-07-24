import React, { Component } from "react";
import Background from "./background";
import ReleaseInfo from "./releaseInfo";
import News from "./news";
import Discography from "./discography";
class MainContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <ReleaseInfo />
        <News />
        <Discography />
      </React.Fragment>
    );
  }
}

export default MainContainer;
