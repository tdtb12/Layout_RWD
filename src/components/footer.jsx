import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div
          className="row"
          style={{
            position: "absolute",
            bottom: "20%",
            justifyContent: "space-around",
            alignItems: "flex-start"
          }}
        >
          <a id="topButton" href="#navbar" className="japaneseTextTitle">
            TOP
          </a>
          <a href="#news" className="japaneseTextTitle">
            NEWS
          </a>
          <a href="#media" className="japaneseTextTitle">
            MEDIA
          </a>
          <a href="#live" className="japaneseTextTitle">
            LIVE
          </a>
          <a href="#about" className="japaneseTextTitle">
            ABOUT
          </a>
          <a href="#discography" className="japaneseTextTitle">
            DISCOGRAPHY
          </a>
          <a href="#" className="japaneseTextTitle">
            MAIL MAGZINE
          </a>
          <a href="mailto:tdtb12@gmail.com" className="japaneseTextTitle">
            CONTACT
          </a>
        </div>
        <p id="copyright" style={{ position: "absolute" }}>
          ©SITE NAME All rights reserved.
        </p>
      </div>
    );
  }
}

export default Footer;
