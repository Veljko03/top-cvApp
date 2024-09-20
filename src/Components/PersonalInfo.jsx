import { useState } from "react";
import Input from "./InputLabel";

function Personal({
  name,
  handleName,
  surname,
  handleSurname,
  email,
  handleEmail,
  contact,
  hancleContact,
}) {
  const [show, setShow] = useState(true);
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
        General Info:{" "}
        <button onClick={handleShow}>{show ? "hide" : "show"}</button>
        <div style={inputsStyle}>
          <Input
            label={"Name:"}
            value={name}
            onChange={handleName}
            type={"text"}
          />
          <Input
            label={"Surnmae:"}
            value={surname}
            onChange={handleSurname}
            type={"text"}
          />
          <Input
            label={"Email:"}
            value={email}
            onChange={handleEmail}
            type={"email"}
          />
          <Input
            label={"Contact:"}
            value={contact}
            onChange={hancleContact}
            type={"text"}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      General Info:{" "}
      <button onClick={handleShow}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default Personal;
