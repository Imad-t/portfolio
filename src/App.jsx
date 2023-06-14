import { useRef } from "react";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.scss";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const components = [Home, About, Projects, Contact];

const App = () => {
  const containerRef = useRef(null);

  const scrollToComponent = (index) => {
    const componentRef = containerRef.current.children[index];
    componentRef.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.app}>
      <Navbar scrollToComponent={scrollToComponent} />
      <div className={styles.container} ref={containerRef}>
        {components.map((Component, index) => (
          <div key={index}>
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
