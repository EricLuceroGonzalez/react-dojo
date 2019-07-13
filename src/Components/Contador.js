import React, { Component } from "react";
import { Button, Badge } from "reactstrap";
class Contador extends Component {
  informacion = {
    titulo: "Gamma",
    valor: 7
  };

  render() {
    return (
      <div
        className="container col-md-6"
        style={{
          backgroundColor: "rgb(200,200,1)",
          padding: "20px 12px",
          borderRadius: "14px",
          boxShadow: "2px 6px 6px gray",
        }}
      >
        <h2 className="ml-2">{this.informacion.titulo}</h2>
        <div class="row align-items-start ml-2">
          <Badge style={{ color: "white", "font-size": "1.65em" }}>
            {this.informacion.valor}
          </Badge>
          <Button className="ml-2 mr-2" color="primary">
            +
          </Button>
          <Button color="danger">-</Button>
          <Button className="ml-2" color="warning">
            delete
          </Button>
        </div>
      </div>
    );
  }
}

export default Contador;
