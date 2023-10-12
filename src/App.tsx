import "./styles/App.css";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";
import { useLayoutEffect, useRef, useState } from "react";
import { darkTheme, lightTheme } from "./styles/themeStyles";
import Navbar from "./components/Navbar";

import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AnimatedCursor from "react-animated-cursor";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  const [changingTheme, setChangingTheme] = useState<"dark" | "light">("light");

  gsap.registerPlugin(ScrollTrigger);

  const component = useRef<any>(null);
  const slider = useRef<any>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 2,
          snap: 1 / (panels.length - 1),
          end: () => slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div ref={component}>
      <div className="animated-cursor">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 242, 0"
          outerAlpha={0.4}
          innerScale={1}
          outerScale={5}
          showSystemCursor={false}
          trailingSpeed={10}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="checkbox"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            ".hamburger-react",
          ]}
        />
      </div>

      <ThemeProvider theme={changingTheme === "dark" ? darkTheme : lightTheme}>
        <Navbar
          changingTheme={changingTheme}
          setChangingTheme={setChangingTheme}
        />
        <HomePage />
        <div ref={slider} className="container">
          <AboutPage />
          <PortfolioPage />
        </div>
        <ContactPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
