import React from "react";
import Contadores from "./Components/Contadores";
import { Container } from "reactstrap";
import Artistas from "./Components/Artistas";
function App() {
  return (
    <div>
      <Container className="mt-4">
        <Artistas />
      </Container>
      <div
        className="container col-md-8 mt-6"
        style={{
          boxShadow: "8px 8px 10px gray",
          background:
            "linear-gradient(90deg, rgba(149,246,55,1) 0%, rgba(42,241,185,0.8) 100%)",
          border: "1px solid gray",
          padding: "30px 50px",
          margin: "30px auto"
        }}
      >
        <h2>Contadores</h2>
        <Contadores />
      </div>
    </div>
  );
}

export default App;
