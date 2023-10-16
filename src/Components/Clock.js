import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  tick() {
    // we use setState so React knows it needs to update the DOM
    this.setState({
      time: new Date(),
    });
  }

  componentDidMount() {
    // when our component loads, we start an interval and it updates every 1000 milliseconds
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    // Updates and logs to the console everytime the state is altered
    console.log("Ticked");
  }

  componentWillUnmount() {
    // clearInterval stops the setInterval function
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>The Current time is: {this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
