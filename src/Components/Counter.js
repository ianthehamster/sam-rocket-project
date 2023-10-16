import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this state object has all the properties that we want to keep track of
      count: 0,
      clicked: 0,
    };
  }

  incrementCount() {
    this.setState({
      // setState triggers React reconciliation and updates the DOM
      count: this.state.count + 1,
      clicked: this.state.clicked + 1,
    });

    // BAD EXAMPLE: this only updates the console. The DOM/HTML is not updated !
    // this.state.count = this.state.count + 1;
    // console.log(this.state.count);
  }

  decrementCount() {
    this.setState({
      // this.setState()
      count: this.state.count - 1,
      clicked: this.state.clicked + 1,
    });
  }

  render() {
    let { name } = this.props;
    return (
      // JSX to be displayed on App.js
      <div>
        <h1>Hello {name ? name : "Stranger"}</h1>

        <h4>
          Count: {this.state.count} -- Clicked: {this.state.clicked}
        </h4>
        <button onClick={() => this.incrementCount()}>+</button>
        <button onClick={() => this.decrementCount()}>-</button>
      </div>
    );
  }
}
