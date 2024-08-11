import styles from "../styles/Projects.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import projects from "../data";
import PropTypes from "prop-types";

const Home = ({ darkMode }) => {
  return (
    <div
      className={`${styles.projects} ${darkMode ? styles["dark-mode"] : ""}`}
    >
      {projects.map((project, index) => (
        <div key={index} className={styles.project}>
          <div className={styles.info}>
            <h2>{project.title}</h2>
            <p>
              {project.description}
            </p>

            <div className={styles.tech}>
              {project.tech.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

            <div className={styles.links}>
              <a href={project.code}>
                <GitHubIcon /> <span>Code</span>
              </a>
              <a href={project.demo}>
                <LaunchIcon /> <span>Live Demo</span>
              </a>
            </div>
          </div>
          <img src={project.img} alt="translator website image" />
        </div>
      ))}
    </div>
  );
};
Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
export default Home;
