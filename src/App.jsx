import FormCv from "./Components/Form";
import Cv from "./Components/Cv";
import { useState } from "react";

const container = {
  display: "flex",
  gap: "100px",
};

function App() {
  return (
    <div style={container}>
      <FormCv />
      <Cv />
    </div>
  );
}

export default App;
