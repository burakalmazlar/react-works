const FormControl = (props) => {
  const { id, label, type, value, invalid, onChange, onBlur, error } = props;
  return (
    <div className={`form-control ${invalid && "invalid"}`}>
      <label htmlFor={id}>{label}</label>
      <span>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
        />
      </span>
      {invalid && <p className="error-text">{error}</p>}
    </div>
  );
};

export default FormControl;
