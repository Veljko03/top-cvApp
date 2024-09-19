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

  if (show) {
    return (
      <div>
        Education: <button onClick={handleShow}>Show</button>
        <div>
          <Input
            label={"Company Name:"}
            value={companyName}
            onChange={handleCompanyName}
            type={"text"}
          />
          <br />
          <Input
            label={"Position:"}
            value={position}
            onChange={handlePosition}
            type={"text"}
          />
          <br />
          <Input
            label={"Responisibilites"}
            value={responsibilities}
            onChange={handleResponsibilities}
            type={"text"}
          />
          <br />
          <Input
            label={"Start date"}
            value={exSDate}
            onChange={handleExSDate}
            type={"date"}
          />
          <br />
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
