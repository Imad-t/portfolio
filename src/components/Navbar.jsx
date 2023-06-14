import React from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = ({ scrollToComponent }) => {
  return (
    <div className={styles.navbar}>
      <p className={styles.heading}>Imad.dev</p>

      <div className={styles.sections}>
        <div className={styles.section} onClick={() => scrollToComponent(0)}>
          Home
        </div>
        <div className={styles.section} onClick={() => scrollToComponent(1)}>
          About
        </div>
        <div className={styles.section} onClick={() => scrollToComponent(2)}>
          Projects
        </div>
        <div className={styles.section} onClick={() => scrollToComponent(3)}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
