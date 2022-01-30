import { forwardRef } from "react";
import styles from "./Password.module.scss";

function Password({ name, error, cornerAdornment, ...otherProps }, ref) {
  return (
    <>
      <input {...otherProps} ref={ref} type="password" name={name}></input>
      {cornerAdornment}
      {error && <p className={styles.error}>Please provide a password!</p>}
    </>
  );
}

export default forwardRef(Password);
