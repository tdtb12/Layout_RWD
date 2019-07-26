import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="about">
        <p style={{ top: "25%", left: "10%", fontSize: "2.5vw" }}>ABOUT</p>
        <p
          className="japaneseTextAbout"
          style={{ top: "35%", left: "10%", fontSize: "2vw" }}
        >
          名前名前
        </p>
        <p
          className="japaneseTextAbout"
          style={{ top: "35%", left: "30%", fontSize: "2vw" }}
        >
          NAME NAME
        </p>
        <div className="textContainer" />
        <p
          className="japaneseTextAbout"
          style={{
            width: "50%",
            height: "30%",
            top: "45%",
            left: "10%",
            textAlign: "left"
          }}
        >
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキスト
        </p>
        <a
          href="#"
          style={{
            bottom: "30%",
            right: "20%",
            fontWeight: "bold"
          }}
        >
          ————　　MORE
        </a>
      </div>
    );
  }
}

export default About;
