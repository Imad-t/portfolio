import styles from "../styles/Navbar.module.scss";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import logo from "../assets/images/logo.png";

const Navbar = ({ darkMode, setDarkMode, scrollToComponent }) => {
  return (
    <div className={`${styles.navbar} ${darkMode ? styles["dark-mode"] : ""}`}>
      <img src={logo} className={styles.logo}></img>

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

      <span className={styles.theme} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <LightModeIcon className={styles.LightModeIcon} /> :  <DarkModeIcon className={styles.DarkModeIcon} />}
      </span>
    </div>
  );
};

export default Navbar;
