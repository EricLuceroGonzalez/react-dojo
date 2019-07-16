import React, { Component } from "react";
import axios from "axios";

class Artistas extends Component {
  state = {};
  componentDidMount() {
    // Build the API

    // **** GET: Make a request for a user with a given ID
    axios
      .get("https://devf-musica.herokuapp.com/api/v1/artista")
      .then(response => {
        console.log(response.data);
        // Pass the data
        this.setState({
            artistas: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
      .finally(function() {
        // always executed
      });
  }
  render() {
    return <h1>Lista de Artistas</h1>;
  }
}

export default Artistas;
