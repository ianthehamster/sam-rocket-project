import React from "react";
import PokeCard from "./PokeCard";
import axios from "axios";

export default class CallApi extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      input: "",
    };
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon/gyarados").then((data) => {
      const unpackedData = data.data;

      this.setState({
        pokemon: [...this.state.pokemon, unpackedData],
      });
    });
  }

  /** componentDidMount()
   * This lifecycle method is called after the component is mounted (i.e., inserted into the DOM)
   * used for actions that need to happen right after the initial rendering
   * fetch() API retrieves data from the PokeAPI endpoint for rayquaza
   * Once data is fetched, it updates the component's state by adding the fetched Pokemon data to the pokemon array in the state
   */

  componentDidUpdate() {
    console.log(this.state.pokemon);
  }

  handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    this.setState({
      input: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.state.input}`)
      .then((data) => {
        const unpackedData = data.data;

        this.setState({
          pokemon: [...this.state.pokemon, unpackedData],
        });
      });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.input}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({
  //         pokemon: [...this.state.pokemon, data],
  //       });
  //     });
  // };

  render() {
    return (
      <div>
        <p>Pokemon Incoming!</p>

        <input
          type="text"
          value={this.state.input}
          placeholder="Pokemon Name"
          onChange={(e) => this.handleChange(e)}
        />

        <input type="submit" value="submit" onClick={this.handleSubmit} />

        {this.state.pokemon && this.state.pokemon.length > 0 ? (
          this.state.pokemon.map((avatar) => (
            <div>
              <PokeCard {...avatar} />
            </div>
          ))
        ) : (
          <p>No Pokemon here</p>
        )}
      </div>
    );
  }
}

/** componentDidUpdate()
 * This lifecycle method is invoked after a component's update is completed. It is called everytime the component re-renders due to changes in props or state
 * logs the current state of the pokemon array to the console every time there is an update
 */
