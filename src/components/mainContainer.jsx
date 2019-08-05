import React, { Component } from "react";
import Background from "./background";
import ReleaseInfo from "../release/releaseInfo";
import News from "./news";
import Discography from "./discography";
import About from "./about";
import Footer from "./footer";
import $ from "jquery";
class MainContainer extends Component {
  componentDidMount() {
    $(window).scroll(function() {
      let topBotton = $("#topButton").offset();
      $("#copyright").offset({ top: topBotton.top + 20, left: topBotton.left });
    });
    $(document).ready(function() {
      $(window).resize(function() {
        if ($(this.window).width() > 768) {
          document.querySelector(".background").style.animation = "";
          /*若縮小後點擊more links鈕會作用動畫將background縮小，放大視窗後造成background width仍被縮小，這裡將動畫取消(微無用功能)*/
        } else {
          if (this.document.querySelector(".links-In")) {
            /*if the links alread swapped-in then swap out */
            this.document.querySelector(".socialMedia").click();
          }
        }
      });
    });
    /*make copyright paragraph dymatically under top button */
  }
  componentWillUnmount() {
    $(window).off("scroll");
    $(document).off("ready");
    //remove listener to prevent error
  }
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
