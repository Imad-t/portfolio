import styles from "../styles/Projects.module.scss";
import chatPage from "../assets/images/chatPage.png";
import musicPlayer from "../assets/images/musicPlayer.png";
import multiStep from "../assets/images/multiStep1.png";
import skyWay from "../assets/images/skyWay.png";
import alarado from "../assets/images/alarado.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Home = ({darkMode}) => {
  return (
    <div className={`${styles.projects} ${darkMode ? styles["dark-mode"] : ""}`}>
      <div className={styles.project}>
                <div className={styles.info}>
          <h2>Responsive Hero Page</h2>
          <p>
            A responsive Hero page with Dark mode toggle
          </p>

          <div className={styles.tech}>
            <span>Javascript</span> <span>Css</span>
          </div>

          <div className={styles.links}>
            <a href="https://github.com/Imad-t/Darkmode-Homepage">
              <GitHubIcon /> <span>Code</span>
            </a>
            <a href="https://alarado-ivory.vercel.app/">
              <LaunchIcon /> <span>Live Demo</span>
            </a>
          </div>
        </div>
        <img src={alarado} alt="chatPage" />

      </div>

      <div className={styles.project}>
                <div className={styles.info}>
          <h2>Multistep from</h2>
          <p>
            A multistep register form with simple validation using vanilla Javascript
          </p>

          <div className={styles.tech}>
            <span>Javascript</span> <span>CSS</span>
          </div>

          <div className={styles.links}>
            <a href="https://github.com/Imad-t/multi-step-formr">
              <GitHubIcon /> <span>Code</span>
            </a>
            <a href="https://multi-step-form-wine-alpha.vercel.app/">
              <LaunchIcon /> <span>Live Demo</span>
            </a>
          </div>
        </div>
        <img src={multiStep} alt="musicPlayer" />
      </div>

      <div className={styles.project}>
                <div className={styles.info}>
          <h2>Music Player</h2>
          <p>
            An online music player with custom playback controls.
          </p>

          <div className={styles.tech}>
            <span>Javascript</span> <span>Tailwindcss</span>
          </div>

          <div className={styles.links}>
            <a href="https://github.com/Imad-t/music-player">
              <GitHubIcon /> <span>Code</span>
            </a>
            <a href="https://music-player-imadt.vercel.app/">
              <LaunchIcon /> <span>Live Demo</span>
            </a>
          </div>
        </div>
        <img src={musicPlayer} alt="musicPlayer" />

      </div>

      <div className={styles.project}>
        <div className={styles.info}>
          <h2>Flight reservation website</h2>
          <p>
            A simple attemt at creating the UI of a flight reservation website.
          </p>

          <div className={styles.tech}>
            <span>React</span> <span>Typescript</span> <span>Tailwind CSS</span>
          </div>

          <div className={styles.links}>
            <a href="https://github.com/Imad-t/skyWay">
              <GitHubIcon /> <span>Code</span>
            </a>
            <a href="https://sky-way.vercel.app/">
              <LaunchIcon /> <span>Live Demo</span>
            </a>
          </div>
        </div>

        <img src={skyWay} alt="skyWay" />
      </div>

      <div className={styles.project}>
                <div className={styles.info}>
          <h2>Chat Page</h2>
          <p>
            This is a simple chat page, suitable for any sort of website that
            supports account registration.{" "}
          </p>

          <div className={styles.tech}>
            <span>React</span> <span>Scss</span>
          </div>

          <div className={styles.links}>
            <a href="https://github.com/Imad-t/chatPage">
              <GitHubIcon /> <span>Code</span>
            </a>
            <a href="https://chat-page-zeta.vercel.app/">
              <LaunchIcon /> <span>Live Demo</span>
            </a>
          </div>
        </div>
        <img src={chatPage} alt="chatPage" />

      </div>
      
    </div>
  );
};

export default Home;
