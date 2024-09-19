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

  if (show) {
    return (
      <div>
        Education: <button onClick={handleShow}>Show</button>
        <div>
          <Input
            label={"School Name:"}
            value={schoolName}
            onChange={handleSchoolName}
            type={"text"}
          />
          <br />
          <Input
            label={"Title:"}
            value={degree}
            onChange={handleDegree}
            type={"text"}
          />
          <br />
          <Input
            label={"Start date"}
            value={dateStart}
            onChange={handleDateS}
            type={"date"}
          />
          <br />
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
      Education: <button onClick={handleShow}>Show</button>
    </div>
  );
}

export default EduForm;
