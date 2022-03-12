import React from "react";
import styles from "./Button.module.scss";
const Button = ({ children, style }) => {
  return (
    <button className={[styles.button, style].join(" ")}>{children}</button>
  );
};

export default Button;
