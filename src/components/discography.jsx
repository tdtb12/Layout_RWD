import React, { Component } from "react";
class Discography extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="discography">
          <div className="album">
            <p className="musicInfo">DISCOGRAPHY</p>
            <a href="#">MORE→</a>
            <div className="photo">
              <div
                className="col"
                style={{ flex: "45%", maxWidth: "45%", alignSelf: "center" }}
              >
                <a href="#">
                  <img
                    src={process.env.PUBLIC_URL + "/img/release.png"}
                    alt="release"
                    style={{
                      maxWidth: "100%"
                    }}
                  />
                </a>
              </div>
              <div className="col" style={{ flex: "25%", maxWidth: "25%" }}>
                <a href="#">
                  <img
                    src={process.env.PUBLIC_URL + "/img/Discography_2.png"}
                    alt="2"
                    style={{ maxWidth: "100%" }}
                  />
                </a>
                <a href="#">
                  <img
                    src={process.env.PUBLIC_URL + "/img/Discography_3.png"}
                    alt="3"
                    style={{ maxWidth: "100%" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="musicVideo">
            <div className="photo">
              <img
                src={process.env.PUBLIC_URL + "/img/MUSIC_VIDEO.png"}
                alt="music video"
                style={{ width: "100%" }}
              />
            </div>
            <p className="musicInfo" style={{ alignSelf: "flex-end" }}>
              MUSIC VIDEO
            </p>
            <a href="#">MORE→</a>
          </div>
        </div>
        {/**start live region */}
        <div id="live">
          <p
            style={{
              position: "absolute",
              fontSize: "2.5vw",
              marginTop: "3%",
              left: "10%"
            }}
          >
            LIVE
          </p>
          <a
            href="#"
            style={{
              position: "absolute",
              fontSize: "1vw",
              fontWeight: "bold",
              marginTop: "3%",
              right: "10%"
            }}
          >
            ————　　MORE
          </a>
          <div className="liveInfo">
            <div className="col">
              <div className="row">
                <p className="year">2018</p>
                <p className="date">12.14</p>
                <div className="friday">FRI</div>
                <p className="japaneseTextTitle">
                  テキストテキストテキストテキストテキストテキスト
                  <br />
                  <span
                    className="japaneseTextSubTitle"
                    style={{ textAlign: "left" }}
                  >
                    テキストテキストテキストテキスト
                  </span>
                </p>
              </div>
              {/*end of row 1 */}
              <div className="row">
                <p className="year">2018</p>
                <p className="date">10.20</p>
                <div className="saturday">SAT</div>
                <p class="japaneseTextTitle">
                  テキストテキストテキスト
                  <br />
                  <span className="japaneseTextSubTitle">
                    テキストテキストテキストテキスト
                  </span>
                </p>
              </div>
              {/*end of row 2 */}
              <div className="row" style={{ marginBottom: "0" }}>
                {/*disable margin-bottom prevent overflow */}
                <p className="year">2018</p>
                <p className="date">10.06</p>
                <div className="saturday">SAT</div>
                <p className="japaneseTextTitle">
                  テキストテキストテキストテキスト
                  <br />
                  <span className="japaneseTextSubTitle">
                    テキストテキストテキストテキスト
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Discography;
