import React from "react";
import Navbar from "./components/navbar";
import MainContainer from "./components/mainContainer";
import { Route } from "react-router-dom";
import ReleaseDetail from "./release/releaseDetail";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Route path="/" exact component={MainContainer} />
      <Route path="/releaseDetail" component={ReleaseDetail} />
    </React.Fragment>
  );
}

export default App;
