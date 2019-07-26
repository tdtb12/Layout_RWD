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
          <a id="topButton" href="#navbar" class="japaneseTextTitle">
            TOP
          </a>
          <a href="#news" class="japaneseTextTitle">
            NEWS
          </a>
          <a href="#media" class="japaneseTextTitle">
            MEDIA
          </a>
          <a href="#live" class="japaneseTextTitle">
            LIVE
          </a>
          <a href="#about" class="japaneseTextTitle">
            ABOUT
          </a>
          <a href="#discography" class="japaneseTextTitle">
            DISCOGRAPHY
          </a>
          <a href="#" class="japaneseTextTitle">
            MAIL MAGZINE
          </a>
          <a href="mailto:tdtb12@gmail.com" class="japaneseTextTitle">
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
