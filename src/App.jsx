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
    const handleScroll = (event) => {
      const deltaY = event.deltaY;
      const isKeyboardEvent = event.type === "keydown";
      const containerScrollTop = containerRef.current.scrollTop;
      const containerScrollHeight = containerRef.current.scrollHeight;
      const containerClientHeight = containerRef.current.clientHeight;

      if ((isKeyboardEvent && event.key === "ArrowDown") || (deltaY > 0 && containerScrollTop + containerClientHeight >= containerScrollHeight)) {
        event.preventDefault();
        if (currentIndex < components.length - 1) {
          scrollToComponent(currentIndex + 1);
        }
      } else if ((isKeyboardEvent && event.key === "ArrowUp") || (deltaY < 0 && containerScrollTop === 0)) {
        event.preventDefault();
        if (currentIndex > 0) {
          scrollToComponent(currentIndex - 1);
        }
      }
    };

    containerRef.current.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleScroll);

    return () => {
      containerRef.current.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleScroll);
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
