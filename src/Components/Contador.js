import React, { Component } from "react";
import { Button, Badge } from "reactstrap";
class Contador extends Component {
  state = {
    titulo: "Gamma",
    valor: 3
  };

  incrementarContador = () => {
    console.log("click!! + ");
    // Modify the state
    this.setState({
      valor: this.state.valor + 1
    });
  };

  decrementarContador = () => {
    // Modify the state
    this.setState({
      valor: this.state.valor - 1
    });
  };

  renderizarValor = () => {
    // Returns the entire Badge with the number depending on condition
    if (this.state.valor > 0) {
      return (
        <Badge color="primary" style={{ fontSize: "1.65em" }}>
          {this.state.valor}
        </Badge>
      );
    } else if (this.state.valor < 0) {
      return (
        <Badge color="danger" style={{ fontSize: "1.65em" }}>
          {this.state.valor}
        </Badge>
      );
    } else
      return (
        <Badge color="warning" style={{ fontSize: "1.65em" }}>
          cero
        </Badge>
      );
  };

  render() {
    return (
      <div
        className="container col-md-6"
        style={{
          backgroundColor: "rgb(200,200,1)",
          padding: "20px 12px",
          borderRadius: "14px",
          boxShadow: "2px 6px 6px gray"
        }}
      >
        <h2 className="ml-2">{this.state.titulo}</h2>
        <div className="row align-items-start ml-2">
          {this.renderizarValor()}
          <Button
            onClick={this.incrementarContador}
            className="ml-2 mr-2"
            color="primary"
          >
            +
          </Button>
          <Button color="danger" onClick={this.decrementarContador}>
            -
          </Button>
          <Button className="ml-2" color="warning">
            delete
          </Button>
        </div>
      </div>
    );
  }
}

export default Contador;
