import React, { Component } from "react";

class News extends Component {
  render() {
    return (
      <div className="News_Media">
        <div id="news">
          <p style={{ fontSize: "2vw" }}>NEWS</p>
          <a href="#">————　　MORE</a>
          <a href="#" className="newsDescription">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </a>
          <p className="newsDescription">2018.10.12</p>
          <a href="#" className="newsDescription">
            テキストテキストテキストテキスト
          </a>
          <p className="newsDescription">2018.9.14</p>
          <a href="#" className="newsDescription">
            テキストテキストテキストテキスト
          </a>
          <p className="newsDescription">2018.9.14</p>
        </div>
        {/*end of  news area*/}
        <div id="media">
          <p style={{ fontSize: "2vw" }}>MEDIA</p>
          <a href="#">————　　MORE</a>
          <a href="#" class="newsDescription">
            テキストテキストテキストテキスト
          </a>
          <p>2018.11.29</p>
          <a href="#" class="newsDescription">
            テキストテキストテキストテキストテキストテ キスト
          </a>
          <p class="newsDescription">2018.11.21</p>
          <a href="#" class="newsDescription">
            テキストテキストテキストテキストテキストテ キストテキストテキスト
          </a>
          <p class="newsDescription">2018.8.31</p>
        </div>
      </div>
    );
  }
}

export default News;
