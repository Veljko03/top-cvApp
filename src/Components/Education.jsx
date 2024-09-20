import { useState } from "react";
import Input from "./InputLabel";

function EduForm({
  schoolName,
  handleSchoolName,
  dateStart,
  handleDateS,
  dateEnd,
  handleDateE,
  degree,
  handleDegree,
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
            label={"School Name:"}
            value={schoolName}
            onChange={handleSchoolName}
            type={"text"}
          />
          <Input
            label={"Title:"}
            value={degree}
            onChange={handleDegree}
            type={"text"}
          />
          <Input
            label={"Start date"}
            value={dateStart}
            onChange={handleDateS}
            type={"date"}
          />
          <Input
            label={"End date"}
            value={dateEnd}
            onChange={handleDateE}
            type={"date"}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      Education: <button onClick={handleShow}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default EduForm;
