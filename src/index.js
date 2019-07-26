import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import $ from "jquery";
// export for others scripts to use

ReactDOM.render(<App />, document.getElementById("root"));

$(window).scroll(function() {
  let topBotton = $("#topButton").offset();
  $("#copyright").offset({ top: topBotton.top + 20, left: topBotton.left });
});
/*make copyright paragraph dymatically under top button */

/* */
$(document).ready(function() {
  $(window).resize(function() {
    if ($(this.window).width() > 768) {
      document.querySelector(".background").style.animation =
        ""; /*若縮小後點擊more links鈕會作用動畫將background縮小*/
    } else {
      /*，放大視窗後造成background width仍被縮小，這裡將動畫取消(微無用功能)*/
      if (this.document.querySelector(".links-In")) {
        /*if the links alread swapped-in then swap out */
        this.document.querySelector(".socialMedia").click();
      }
    }
  });
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
