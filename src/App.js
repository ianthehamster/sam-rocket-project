import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

import Greeting from "./Components/Greeting"; // we don't need to wrap Greeting in {} as we are exporting it as a default export
import { Introduce } from "./Components/Introduce"; // we wrap {Introduce} in curly braces as we are exporting it as a named export
import Counter from "./Components/Counter";
import Clock from "./Components/Clock";
import Form from "./Components/Form";
import HookCounter from "./Components/HookCounter";
import HookClock from "./Components/HookClock";

import BlogList from "./Components/BlogList";

import CallApi from "./Components/CallApi";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showClock: true,
    };
  }

  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock,
    });
  };

  render() {
    let description = {
      age: "12",
      weight: "56",
      height: "192",
    };

    // rendering the component
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World! <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <button onClick={this.toggleClock}>Toggle Clock</button>

          {this.state.showClock ? <Clock /> : "no clock"}
          {/* passing down data/props (firstName and lastName) from our parent component, App.js, into our child component, Greeting.js */}
          <Greeting firstName="Ian" lastName="Chow" />
          <Introduce age="25" weight="77" height="180" />
          <Introduce {...description} />

          <Counter name="Ian" />

          <Form />

          <BlogList />
        </header>
        {/* <CallApi /> */}
        <HookCounter />
        <HookCounter name="Sam" />
      </div>
    );
  }
}

export default App;
