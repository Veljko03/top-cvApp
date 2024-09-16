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
  return (
    <div>
      General Info:
      <div>
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

export default Personal;
