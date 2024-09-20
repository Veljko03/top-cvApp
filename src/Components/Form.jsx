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
  const container = {
    display: "flex",
    gap: "100px",
  };

  const forms = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    border: "solid black 2px",
    padding: "15px",
    borderRadius: "8px",
  };

  const cv = {
    display: "flex",
    justifyItems: "center",
  };
  return (
    <div style={container}>
      <div style={forms}>
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
      </div>

      <div style={cv}>
        <Cv
          name={name}
          surname={surname}
          email={email}
          contact={contact}
          schoolName={schoolName}
          dateStart={dateStart}
          dateEnd={dateEnd}
          companyName={companyName}
          position={position}
          responsibilities={responsibilities}
          exEDate={exEDate}
          exSDate={exSDate}
        />
      </div>
    </div>
  );
}

export default FormCv;
