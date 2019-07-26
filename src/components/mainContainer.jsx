import React, { Component } from "react";
import Background from "./background";
import ReleaseInfo from "./releaseInfo";
import News from "./news";
import Discography from "./discography";
import About from "./about";
import Footer from "./footer";
class MainContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <ReleaseInfo />
        <News />
        <Discography />
        <About />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainContainer;
