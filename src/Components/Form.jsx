import { useState } from "react";
import Personal from "./PersonalInfo";
import Cv from "./Cv";

function FormCv() {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");

  const [contact, setContact] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleSur(e) {
    setSurName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleContact(e) {
    setContact(e.target.value);
  }
  return (
    <div>
      <Personal
        name={name}
        handleName={handleName}
        surname={surname}
        handleSurname={handleSur}
        email={email}
        handleEmail={handleEmail}
        contact={contact}
        hancleContact={handleContact}
      />
      <Cv name={name} surname={surname} email={email} contact={contact} />
    </div>
  );
}

export default FormCv;
