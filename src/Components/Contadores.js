import React, { Component } from "react";
import Contador from "./Contador";

class Contadores extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Contador titulo="Beta" valor={5} />
        <Contador titulo="Gama" valor={0} />
      </React.Fragment>
    );
  }
}

export default Contadores;
