import styles from "../styles/About.module.scss";
import image from "../assets/images/about.png";

const About = () => {
  return (
    <div className={styles.about}>
      <img src={image} alt="" />
      <div className={styles.section}>
        <h3>About me</h3>
        <h2>A dedicated Front-end Developer based in Algiers, Algeria.</h2>
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

export default About;
