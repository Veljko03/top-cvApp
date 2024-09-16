function Input({ label, value, onChange, type }) {
  return (
    <label>
      {label} <input value={value} type={type} onChange={onChange} />
    </label>
  );
}

export default Input;
