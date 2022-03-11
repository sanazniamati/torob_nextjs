// library
import { useState } from "react";
// styles
import loginButtonStyles from "../../styles/LoginButton.module.css";

export default function Button() {
  const [modalStatus, setModalStatus] = useState(false);
  const handelClick = () => {
    setModalStatus((modalStatus) => !modalStatus);
  };
  return (
    <div className={loginButtonStyles.btnContainer}>
      <div className={loginButtonStyles.btnSubmit} onClick={handelClick}>
        ورود / ثبت نام
      </div>

      {modalStatus && (
        <div className={loginButtonStyles.black_modal_box}>
          <div className={loginButtonStyles.white_modal_box}>
            <div className={loginButtonStyles.header_modal_box}>
              <hr />
              <span className={loginButtonStyles.header_txt_modal_box}>
                ورود یا ثبت نام
              </span>
            </div>
            <div className={loginButtonStyles.main_content_modal_box}>
              <form className={loginButtonStyles.form_modal_box}>
                <div>
                  <label htmlFor="phone_number"> شماره موبایل</label>
                  <input
                    className={loginButtonStyles.form_input}
                    type="tel"
                    name="phone_number"
                  />
                </div>
                <div className={loginButtonStyles.login_btn_container}>
                  <button
                    className={loginButtonStyles.submit_btn}
                    type="submit"
                  >
                    دریافت کد تایید
                  </button>
                </div>
              </form>
              <div>
                <p className={loginButtonStyles.footer_first_txt}>
                  ثبت نام در ترب به معنی موافقت با
                  <a href="/pages/terms/">شرایط استفاده از ترب</a> است.
                </p>
                <p className={loginButtonStyles.footer_secend_txt}>
                  قبلاً در ترب حساب کاربری داشتم.
                </p>
              </div>
            </div>
            <div className={loginButtonStyles.close_modal_box}></div>
          </div>
        </div>
      )}
    </div>
  );
}
