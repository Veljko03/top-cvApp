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

  if (show) {
    return (
      <div>
        General Info: <button onClick={handleShow}>Show</button>
        <div className="inputs">
          <Input
            label={"Name:"}
            value={name}
            onChange={handleName}
            type={"text"}
          />
          <br />
          <Input
            label={"Surnmae:"}
            value={surname}
            onChange={handleSurname}
            type={"text"}
          />
          <br />
          <Input
            label={"Email:"}
            value={email}
            onChange={handleEmail}
            type={"email"}
          />
          <br />
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
