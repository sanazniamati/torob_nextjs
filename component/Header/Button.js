import buttonStyles from "../../styles/Button.module.css";
import React from "react";

export default function Button() {
  return (
    <div className={buttonStyles.btnContainer}>
      <div className={buttonStyles.btnSubmit}>ورود / ثبت نام </div>
    </div>
  );
}
