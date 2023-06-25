import styles from "../styles/Projects.module.scss";
import chatPage from "../assets/images/chatPage.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
const Home = () => {
  return (
    <div className={styles.projects}>
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
              <GitHubIcon /> Code
            </a>
            <a href="https://chat-page-zeta.vercel.app/">
              <LaunchIcon /> Live demo
            </a>
          </div>
        </div>
        <img src={chatPage} alt="chatPage" />

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
              <GitHubIcon /> Code
            </a>
            <a href="https://chat-page-zeta.vercel.app/">
              <LaunchIcon /> Live demo
            </a>
          </div>
        </div>

        <img src={chatPage} alt="chatPage" />
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
              <GitHubIcon /> Code
            </a>
            <a href="https://chat-page-zeta.vercel.app/">
              <LaunchIcon /> Live demo
            </a>
          </div>
        </div>
        <img src={chatPage} alt="chatPage" />
      </div>
    </div>
  );
};

export default Home;
