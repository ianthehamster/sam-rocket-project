import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      telephone: "",
      hovered: 0,
      submit: 0,
    };
  }

  onSubmit = (e) => {
    // prevent default action for submitting form (refreshing page and sending form to desired location)
    e.preventDefault();

    alert("Submitted Data email: " + this.state.email);

    this.setState({
      submit: this.state.submit + 1,
      email: "",
      password: "",
      telephone: "",
    });
  };

  onHover = () => {
    this.setState({
      hovered: this.state.hovered + 1,
    });
  };

  handleChange = (e) => {
    let { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>
          Hovered over the form: {this.state.hovered} -- Form submitted:{" "}
          {this.state.submit}
        </h1>

        <form onMouseEnter={this.onHover} onSubmit={this.onSubmit}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Password:</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <label>Telephone:</label>
          <input
            type="text"
            name="telephone"
            value={this.state.telephone}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
