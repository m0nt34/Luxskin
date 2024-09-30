import React from "react";
import style from "../../assets/styles/notFound.module.css";
function Index() {
  return (
    <div className={style.main_cont}>
      <div className={style.error_code_cont}>
        <span>4</span>
        <span className={style.zero_cont}>0</span>
        <span>4</span>
      </div>
      <div className={style.bottom_text}>
        <p>Oops! The page you're looking for cannot be found.</p>
      </div>
    </div>
  );
}

export default Index;
