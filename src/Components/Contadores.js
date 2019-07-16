import React, { Component } from "react";
import Contador from "./Contador";

class Contadores extends Component {
  state = {
    contadores: [
      { id: 0, titulo: "Alpha", valor: 0 },
      { id: 1, titulo: "Bravo", valor: 3 },
      { id: 2, titulo: "Charlie", valor: -3 },
      { id: 3, titulo: "Delta", valor: 0 },
      { id: 4, titulo: "Echo", valor: 3 }
    ]
  };

  eliminarContador = (id) => {
    const nuevosContadores = this.state.contadores.filter(
      contador => contador.id !== id
    );
    this.setState({
      contadores: nuevosContadores
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.contadores.map(contador => {
          return (
            <Contador
              key={contador.id}
              titulo={contador.titulo}
              valor={contador.valor}
              borrar={this.eliminarContador}
              id={contador.id}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Contadores;
