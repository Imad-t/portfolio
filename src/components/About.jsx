import styles from "../styles/About.module.scss";
import PropTypes from "prop-types";

const About = ({darkMode}) => {
  return (
    <div className={`${styles.about} ${darkMode ? styles["dark-mode"] : ""}`}>
      <div className={styles.section}>
        <h2>About me</h2>
        <h3>A dedicated Front-end Developer based in Algiers, Algeria.</h3>
        <p>
          As a junior frontend developer with experience in React, I have a
          solid foundation in building dynamic and responsive web applications.
        </p>
        <p>
          With a focus on problem-solving, I strive to deliver innovative
          solutions that enhance user experiences. Currently in my final year of
          computer science studies, I am equipped with a deep understanding of
          programming principles and best practices.
        </p>
        <p>
             I am highly motivated and
          constantly seeking opportunities to expand my skill set and stay
          up-to-date with the latest industry trends. Collaboration and teamwork
          are key aspects of my approach, and I thrive in a dynamic and
          innovative environment.
        </p>
      </div>
    </div>
  );
};
About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
export default About;
