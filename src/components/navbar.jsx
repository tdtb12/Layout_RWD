import React, { Component } from "react";

class Navbar extends Component {
  state = {
    className: "nav-links"
  };
  showSocialMedia() {
    const links = document.querySelectorAll(".nav-links a");
    if (this.state.className === "nav-links links-In") {
      this.setState({ className: "nav-links" }); //if the social media links already shown then swap it out
      links.forEach(link => (link.style.animation = ""));
      document.querySelector(".background").style.animation = "";
    } else {
      this.setState({ className: "nav-links links-In" }); //show social media links
      links.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 +
          1}s`;
      });
      document.querySelector(".background").style.animation =
        "backgroundShrink 0.4s ease-in forwards";
    }
  }
  render() {
    return (
      <div id="navbar">
        <div className="dropDownButton">
          <a href="#">
            <div />
            <div />
            <div style={{ width: "1.25vw" }} />
          </a>
        </div>
        <a href="#" style={{ marginRight: "3%", fontSize: "2.5vw" }}>
          SITE NAME
        </a>
        <div style={{ marginRight: "30%", fontSize: "1.5vw" }}>SAMPLE SITE</div>
        <img
          className="socialMedia"
          src={process.env.PUBLIC_URL + "/img/more.png"}
          alt="social media"
          style={{ width: "5%" }}
          onClick={() => this.showSocialMedia()}
        />
        <div className={this.state.className}>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/img/twitter.png"}
              alt="twitter"
            />
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/img/facebook.png"}
              alt="facebook"
            />
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/img/youtube.png"}
              alt="youtube"
            />
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/img/instagram.png"}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
