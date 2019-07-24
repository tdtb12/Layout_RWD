import React, { Component } from "react";
class Discography extends Component {
  state = {};
  render() {
    return (
      <div id="discography">
        <div className="album">
          <p className="musicInfo">DISCOGRAPHY</p>
          <div className="photo">
            <div className="col" style={{ flex: "45%", maxWidth: "45%" }}>
              <a href="#">
                <img
                  src="/img/release.png"
                  alt="release"
                  style={{ maxWidth: "100%" }}
                />
              </a>
            </div>

            <div className="col" style={{ flex: "30%", maxWidth: "30%" }}>
              <a href="#">
                {" "}
                <img
                  src="/img/Discography_2.png"
                  alt="2"
                  style={{ maxWidth: "100%" }}
                />
              </a>
              <a href="#">
                {" "}
                <img
                  src="/img/Discography_3.png"
                  alt="3"
                  style={{ maxWidth: "100%" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="musicVideo">
          <p class="musicInfo">MUSIC VIDEO</p>
        </div>
      </div>
    );
  }
}

export default Discography;
