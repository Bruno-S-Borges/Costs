import styles from "./input.module.css";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleOnChange}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
