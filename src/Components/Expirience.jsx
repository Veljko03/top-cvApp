import { useState } from "react";
import Input from "./InputLabel";

function ExpirienceForm({
  companyName,
  handleCompanyName,
  position,
  handlePosition,
  responsibilities,
  handleResponsibilities,
  exSDate,
  handleExSDate,
  exEDate,
  handleExEDate,
}) {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
    console.log(show);
  }

  const inputsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "30px",
  };

  if (show) {
    return (
      <div>
        Education:{" "}
        <button onClick={handleShow}>{show ? "hide" : "show"}</button>
        <div style={inputsStyle}>
          <Input
            label={"Company Name:"}
            value={companyName}
            onChange={handleCompanyName}
            type={"text"}
          />

          <Input
            label={"Position:"}
            value={position}
            onChange={handlePosition}
            type={"text"}
          />

          <Input
            label={"Responisibilites"}
            value={responsibilities}
            onChange={handleResponsibilities}
            type={"text"}
          />

          <Input
            label={"Start date"}
            value={exSDate}
            onChange={handleExSDate}
            type={"date"}
          />

          <Input
            label={"End date"}
            value={exEDate}
            onChange={handleExEDate}
            type={"date"}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      Expirience: <button onClick={handleShow}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default ExpirienceForm;
