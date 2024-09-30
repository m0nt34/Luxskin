import React from "react";
import style from '../../assets/styles/navBar.module.css'
const MenuIcon = ({MenuCloseFunction,clickStyle,menuActv}) => {
  return (
    <div
      className={style.menu_btn}
      onClick={MenuCloseFunction}
      style={clickStyle}
    >
      <span
        className={menuActv ? style.active : null}
        style={{ backgroundColor: menuActv ? "var(--white)" : null }}
      ></span>
      <span
        className={menuActv ? style.active : null}
        style={{ backgroundColor: menuActv ? "var(--white)" : null }}
      ></span>
      <span
        className={menuActv ? style.active : null}
        style={{ backgroundColor: menuActv ? "var(--white)" : null }}
      ></span>
    </div>
  );
};

export default MenuIcon;
