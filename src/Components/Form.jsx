import { useState } from "react";
import Personal from "./PersonalInfo";
import Cv from "./Cv";
import EduForm from "./Education";

function FormCv() {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [dateStart, setDateS] = useState("");
  const [dateEnd, setDateE] = useState("");
  const [degree, setDegree] = useState("");

  function handleSchoolName(e) {
    setSchoolName(e.target.value);
  }
  function handleDateS(e) {
    setDateS(e.target.value);
  }
  function handleDateE(e) {
    setDateE(e.target.value);
  }
  function handleDegree(e) {
    setDegree(e.target.value);
  }

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

      <EduForm
        schoolName={schoolName}
        handleSchoolName={handleSchoolName}
        dateStart={dateStart}
        handleDateS={handleDateS}
        dateEnd={dateEnd}
        handleDateE={handleDateE}
        degree={degree}
        handleDegree={handleDegree}
      />

      <Cv name={name} surname={surname} email={email} contact={contact} />
    </div>
  );
}

export default FormCv;
