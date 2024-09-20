function Cv({
  name,
  surname,
  email,
  contact,
  schoolName,
  dateStart,
  dateEnd,
  degree,
  companyName,
  position,
  responsibilities,
  exSDate,
  exEDate,
}) {
  const personal = {
    backgoundColor: "blue",
  };

  const education = {
    backgoundColor: "green",
  };
  const expirience = {
    backgoundColor: "red",
  };

  return (
    <div>
      <div style={personal}>
        <h1>
          {name} {surname}
        </h1>
        <div>
          <p>{email}</p>
          <p>{contact}</p>
        </div>
      </div>
      <div style={education}>
        <h3>School name {schoolName}</h3>
        <h5>{degree}</h5>
        <p>Start date {dateStart}</p>
        <p>End date {dateEnd}</p>
      </div>
      <div style={expirience}>
        <h2>Expirience:</h2>
        <div>
          <div>
            {" "}
            <h4>
              Company name: <br /> {companyName}
            </h4>
            <h5>Position {position}</h5>
            <p>
              From {exSDate} till, {exEDate}
            </p>
          </div>
          <div>
            <h5>Responsibilities</h5>
            <p>{responsibilities}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
