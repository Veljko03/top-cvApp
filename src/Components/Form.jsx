import { useState } from "react";
import Personal from "./PersonalInfo";
import Cv from "./Cv";
import EduForm from "./Education";
import ExpirienceForm from "./Expirience";

function FormCv() {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [dateStart, setDateS] = useState("");
  const [dateEnd, setDateE] = useState("");
  const [degree, setDegree] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [exSDate, setExSDate] = useState("");
  const [exEDate, setexEDate] = useState("");

  function handleCompanyName(e) {
    setCompanyName(e.target.value);
  }
  function handlePosition(e) {
    setPosition(e.target.value);
  }
  function handleResponsibilities(e) {
    setResponsibilities(e.target.value);
  }
  function handleExSDate(e) {
    setExSDate(e.target.value);
  }
  function handleExEDate(e) {
    setexEDate(e.target.value);
  }
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

      <ExpirienceForm
        companyName={companyName}
        handleCompanyName={handleCompanyName}
        position={position}
        handlePosition={handlePosition}
        responsibilities={responsibilities}
        handleResponsibilities={handleResponsibilities}
        exSDate={exSDate}
        handleExSDate={handleExSDate}
        exEDate={exEDate}
        handleExEDate={handleExEDate}
      />

      <Cv name={name} surname={surname} email={email} contact={contact} />
    </div>
  );
}

export default FormCv;
