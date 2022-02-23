import loginButtonStyles from "../../styles/LoginButton.module.css";
import React from "react";

export default function Button() {
  return (
    <div className={loginButtonStyles.btnContainer}>
      <div className={loginButtonStyles.btnSubmit}>ورود / ثبت نام </div>
    </div>
  );
}
