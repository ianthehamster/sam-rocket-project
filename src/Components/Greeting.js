// Class-based Components (accepts props from parents such that we can display on our screen)
import React from "react"; // because we are using React.Component to have access to class-based features

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // we pass in firstName and lastName props to the JSX below
    const { firstName, lastName } = this.props;
    return (
      // what will be displayed on the DOM
      <div>
        <h1>Greetings!</h1>

        {firstName && lastName ? (
          <h6>
            {firstName} {lastName}
          </h6>
        ) : (
          <h6>Stranger</h6>
        )}
      </div>
    );
  }
}
