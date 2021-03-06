import React, { Component } from "react";
import { Link } from "react-router-dom";

class ReleaseInfo extends Component {
  render() {
    return (
      <div className="release">
        <div className="info">
          <p style={{ fontSize: "3.5vw" }}>NEW RELEASE</p>
          <p style={{ fontSize: "2.5vw" }}>Sub Text</p>
          <p style={{ fontSize: "1vw" }}>
            2019.3.21 テキストテキストテキストテキスト
          </p>
          <p style={{ fontSize: "1vw" }}>AAAA-1234 ¥3,000+tax</p>
          <Link
            to="/Layout_RWD/releaseDetail"
            style={{ font: "1vw bold", alignSelf: "flex-end" }}
          >
            ————　　　READ MORE
          </Link>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/img/release.png"}
          alt="release"
          style={{ width: "30%" }}
        />
      </div>
    );
  }
}

export default ReleaseInfo;
