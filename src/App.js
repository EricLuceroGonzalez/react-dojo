import React from "react";
import Contadores from "./Components/Contadores";

function App() {
  return (
    <div
      className="container col-md-6 mt-4"
      style={{
        boxShadow: "6px 6px 6px gray",
        padding: "30px 20px"
      }}
    >
      <h2>Contadores</h2>
      <Contadores />

    </div>
  );
}

export default App;
