import React, { Component } from "react";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HousesList } from "./components/Objects/HousesList";
import NaviBar from "./components/Navbar/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <NaviBar />
        <HousesList />
      </div>
    );
  }
}

export default App;
