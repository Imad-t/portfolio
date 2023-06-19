import { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.scss";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Link } from "react-scroll";

const components = [Home, About, Projects, Contact];

const App = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToComponent = (index) => {
    setCurrentIndex(index);
    const componentRef = containerRef.current.children[index];
    componentRef.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" && currentIndex < components.length - 1) {
        scrollToComponent(currentIndex + 1);
      } else if (event.key === "ArrowUp" && currentIndex > 0) {
        scrollToComponent(currentIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  useEffect(() => {
    const handleMouseWheel = (event) => {
      event.preventDefault();
      if (event.deltaY > 0 && currentIndex < components.length - 1) {
        scrollToComponent(currentIndex + 1);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        scrollToComponent(currentIndex - 1);
      }
    };

    window.addEventListener("wheel", handleMouseWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, [currentIndex]);

  return (
    <div className={styles.app} tabIndex={0}>
      <Navbar scrollToComponent={scrollToComponent} />
      <div className={styles.container} ref={containerRef}>
        {components.map((Component, index) => (
          <div key={index}>
            <Link
              to={`component-${index}`}
              smooth={true}
              duration={500}
              onClick={() => scrollToComponent(index)}
            >
              Scroll to Section
            </Link>
            <div id={`component-${index}`}>
              <Component />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
