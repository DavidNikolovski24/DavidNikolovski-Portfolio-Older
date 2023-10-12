import { useEffect, useRef } from "react";
import styled from "styled-components";
import { PageStyled } from "../styles/pages";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./PortfolioCss.css";

gsap.registerPlugin(ScrollTrigger);

const PortfolioPage = () => {
  const animatedH2 = useRef<any>(null);
  useEffect(() => {
    gsap.to(animatedH2.current, {
      rotate: 90,
      scale: 3,
      position: "fixed",
      left: "-10px",
      top: "35%",
      duration: 2,
      ease: "power2.inOut",

      scrollTrigger: {
        trigger: "#projects",
        start: "center",
        scrub: 1,
        end: "bottom 20%",
      },
    });
  }, []);

  return (
    <PageStyledModified>
      <h2 ref={animatedH2}>PROJECTS</h2>
      <div>
        <h4>StreetArtist</h4>
        <h4>Velnes</h4>
        <h4>Online Shop</h4>
      </div>
    </PageStyledModified>
  );
};

export default PortfolioPage;

const PageStyledModified = styled<any>(PageStyled).attrs({
  className: "panel",
  id: "projects",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColorThird};
  overflow: hidden;
  h2 {
    color: ${({ theme }) => theme.textColor};
  }
`;
