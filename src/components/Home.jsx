import styles from "../styles/Home.module.scss";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import cvIcon from "../assets/images/cv.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import sass from "../assets/images/sass.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import bootstrap from "../assets/images/bootstrap.png";
import python from "../assets/images/python.png";
import chakra from "../assets/images/chakra.png";
import git from "../assets/images/git.png";
import tailwind from "../assets/images/tailwind.png";
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types";


const Home = ({ darkMode }) => {
  return (
    <div className={`${styles.home} ${darkMode ? styles["dark-mode"] : ""}`}>
      <div className={styles.info}>
        <h1>Front-End React Developer</h1>
        <p>
          Hi, I am Imad-Eddine Terraf, a passionate front-end React developer
          based in Algiers, Algeria.
        </p>
        <div className={styles.proLinks}>
          <a href="https://www.linkedin.com/in/imad-eddine-terraf-🇵🇸-745a0b201/" target="_blank" rel="noreferrer">
            <img className={styles.contact} src={linkedin} alt="Linkedin " />
          </a>
          <a href="https://github.com/Imad-t" target="_blank" rel="noreferrer">
            <img className={styles.contact} src={github} alt="Github " />
          </a>
          <a href="https://cv-imad-t.tiiny.site" target="_blank" rel="noreferrer">
            <img className={styles.contact} src={cvIcon} alt="download cv" />
          </a>
        </div>
        <div className={styles.stack}>
          <span>Tech Stack</span>
          <ul>
            <li>
              <img className={styles.icon} src={html} alt="html " />
            </li>
            <li>
              <img className={styles.icon} src={css} alt="css " />
            </li>
            <li>
              <img className={styles.icon} src={tailwind} alt="tailwindcss " />
            </li>
            <li>
              <img className={styles.icon} src={js} alt="js " />
            </li>
            <li>
              <img className={styles.icon} src={react} alt="react " />
            </li>
            <li>
              <img className={styles.icon} src={sass} alt="sass " />
            </li>
            <li>
              <img className={styles.icon} src={chakra} alt="chakra " />
            </li>
            <li>
              <img className={styles.icon} src={bootstrap} alt="bootstrap " />
            </li>
            <li>
              <img className={styles.icon} src={git} alt="git " />
            </li>
            <li>
              <img className={styles.icon} src={python} alt="python " />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.myImage} loading="lazy"></div>
    </div>
  );
};
Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
export default Home;
