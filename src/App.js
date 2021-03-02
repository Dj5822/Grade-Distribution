import React, { Component} from "react";
import {hot} from "react-hot-loader";
import data from "./Data.js";
import Course from "./Course.js";
import "./App.css";

class App extends Component{
  render(){
    var courseInfo = [];

    for (var i=0; i<data.length; i++) {
      courseInfo.push(<Course subject={data[i].subject} dist={data[i].distribution} />);
    }

    return(
      <div className="App">
        <h1> Grade Distribution 2021 - Semester 1 </h1>
        {courseInfo}
      </div>
    );
  }
}

export default hot(module)(App);