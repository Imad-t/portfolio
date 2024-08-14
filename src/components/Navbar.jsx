import styles from "../styles/Navbar.module.scss";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logodark.png";
import PropTypes from "prop-types";



const Navbar = ({ darkMode, setDarkMode, scrollToComponent }) => {
  return (
    <div className={`${styles.navbar} ${darkMode ? styles["dark-mode"] : ""}`}>
      {
        darkMode ? <img src={logoDark} className={styles.logo}></img> : <img src={logo} className={styles.logo}></img>
      }

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
Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.any.isRequired,
  scrollToComponent: PropTypes.any.isRequired,
};
export default Navbar;
