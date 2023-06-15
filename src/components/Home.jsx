import styles from "../styles/Home.module.scss";
import Myimage from "../assets/images/20221221141125_IMG_0137.jpg";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import sass from "../assets/images/sass.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import bootstrap from "../assets/images/bootstrap.png";
import python from "../assets/images/python.png";
import chakra from "../assets/images/chakra.png";
import git from "../assets/images/git.png";
import sql from "../assets/images/sql.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.info}>
        <div>
          <h1>Front-End React Developer</h1>
          <p>
            Hi, I'm Imad-Eddine Terraf, a passionate front-end React developer based in
            Algiers, Algeria.
          </p>
          <a href="https://www.linkedin.com/in/imad-eddine-terraf-745a0b201/">
            <img className={styles.contact} src={linkedin} alt="Linkedin " />
          </a>
          <a href="https://github.com/Imad-t">
            <img className={styles.contact} src={github} alt="Github " />
          </a>
        </div>
        <div className={styles.stack}>
           <span>Tech Stack</span>
          <img className={styles.icon} src={html} alt="html " />
          <img className={styles.icon} src={css} alt="css " />
          <img className={styles.icon} src={sass} alt="sass " />
          <img className={styles.icon} src={js} alt="js " />
          <img className={styles.icon} src={react} alt="react " />
          <img className={styles.icon} src={chakra} alt="chakra " />
          <img className={styles.icon} src={git} alt="git " />
          <img className={styles.icon} src={bootstrap} alt="bootstrap " />
          <img className={styles.icon} src={python} alt="python " />
          <img className={styles.icon} src={sql} alt="sql " />
        </div>
      </div>
      <img className={styles.myImage} src={Myimage} alt="Imad's picture" />
    </div>
  );
};

export default Home;
