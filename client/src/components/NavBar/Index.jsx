import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useUrlLocation from "../../hooks/useUrlLocation";
import UseMagnet from "../../hooks/UseMagnet";
import LuxSkinIcon from "../../assets/icons/LuxSkinIcon";
import MenuIcon from "./MenuIcon";
import { menuData } from "../../data/menuData";
import style from "../../assets/styles/navBar.module.css";

function Index() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuClick, setMenuClick] = useState(true);
  const currentPath = useUrlLocation();
  const menuActv = useRef(false);
  const ulRef = useRef(null);

  useGSAP(() => {
    gsap.set(ulRef.current.children, { x: -50, opacity: 0 });
  });

  const toggleMenu = () => {
    const isActive = menuActv.current;
    const children = ulRef.current.children;
    setTimeout(() => {
      gsap.to(children, {
        duration: isActive ? 0.3 : 0.25,
        x: isActive ? -50 : 0,
        opacity: isActive ? 0 : 1,
        stagger: isActive ? 0 : 0.15,
        ease: "power3.out",
      });
    }, isActive ? 0 : 450);

    if (isActive) {
      setTimeout(() => {
        setShowMenu(false);
      }, 1000);
    } else {
      setShowMenu(true);
    }

    menuActv.current = !menuActv.current;
    setMenuClick(false);
    setTimeout(() => setMenuClick(true), 1000);
  };

  return (
    <div className={style.fs_cont}>
      <div
        className={`${
          showMenu ? "visible pointer-events-auto" : "invisible pointer-events-none"
          } ${style.menu_cont} ${menuActv.current ? style.active : ""}`}
          style={{
            transition: menuClick
            ? "height 0s, padding 0s"
            : "height 0.8s, padding 0.8s",
          }}
          >
        <div className={style.menu_inside_cont}>
          <ul className={style.links_cont} ref={ulRef}>
            {menuData.map((data, i) => (
              <li key={i}>
                <UseMagnet str="0.4" drt="0.8">
                  <NavLink
                    to={data.location}
                    className={ currentPath === data.location ? style.active : "" }
                    onClick={() => { setTimeout(toggleMenu, 250) }}
                  >
                    <UseMagnet str="0.15" drt="0.8">
                      <p>{data.name}</p>
                    </UseMagnet>
                  </NavLink>
                </UseMagnet>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav className={style.main_cont}>
        <div className={style.left_side}>
          <a href="/">
            <LuxSkinIcon
              className={`w-[76.8px] aspect-[2/1] cursor-pointer select-none relative py-0.75 transition-opacity duration-150 ${currentPath === "/" ? "opacity-100" : "opacity-65"} hover:opacity-100 1200px:w-[6.4vw]`}
            />
          </a>
        </div>
        <MenuIcon
          MenuCloseFunction={toggleMenu}
          clickStyle={{ pointerEvents: menuClick ? "all" : "none" }}
          menuActv={menuActv.current}
        />
      </nav>
    </div>
  );
}

export default Index;