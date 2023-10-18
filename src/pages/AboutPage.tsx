import styled from "styled-components";
import { PageStyled } from "../styles/pages";
import { spacings } from "../styles/themeStyles";
import davidPic from "../assets/images/david.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AboutPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const component = useRef<any>(null);

  useEffect(() => {
    const h2Element = component.current.querySelector(".highlightHeading");
    gsap.set(h2Element, { clipPath: "inset( 0   0 100% 0)" });
    gsap.to(h2Element, {
      clipPath: "inset(0 0 0 0)",
      ease: "ease-in",
      scrollTrigger: {
        trigger: "#about",
        start: "top 30%",
        end: "top 40%",
        scrub: true,
      },
    });
  }, []);

  return (
    <PageStyledModified ref={component}>
      <div>
        <h2 className="highlightHeading">
          <span>Hi. I'm</span> <br />
          David Nikolovski.
        </h2>
        <br />

        <p>
          I'm a Junior <SpanHighlight>Frontend Developer</SpanHighlight> on a
          mission to craft captivating user experiences in the digital world.
          With a strong foundation in <SpanHighlight>React</SpanHighlight>,{" "}
          <SpanHighlight>TypeScript</SpanHighlight> and{" "}
          <SpanHighlight> Next.js </SpanHighlight> I'm dedicated to creating
          seamless and user-friendly web applications that leave a lasting
          impact.
          <br />
          <br />
          My journey in web development has been driven by an insatiable
          curiosity and a love for problem-solving. Every project is an
          opportunity to learn and grow, and I embrace challenges with
          enthusiasm, continuously seeking new ways to innovate and elevate user
          interfaces. I'm passionate about staying at the forefront of
          technology trends, ensuring that my work is not only aesthetically
          pleasing but also efficient and cutting-edge.
          <br />
          <br />
          Collaboration and teamwork are fundamental to my approach, as I
          believe that the best solutions emerge when diverse perspectives come
          together. Let's connect and collaborate on exciting projects, share
          insights, and shape the future of web development. Together, we can
          turn ideas into reality and make the digital world a more engaging and
          user-centric place.
        </p>
        <div>
          <div id="languages">
            <h3>Languages</h3>
            <p>
              <SpanHighlight> HTML </SpanHighlight>,{" "}
              <SpanHighlight> CSS </SpanHighlight>,
              <SpanHighlight> JavaScript(ES6+) </SpanHighlight>,
              <SpanHighlight> TypeScript </SpanHighlight>
            </p>
          </div>
          <div id="frameworks">
            <h3>Frameworks\Libraries</h3>
            <p>
              <SpanHighlight> React.js </SpanHighlight>,
              <SpanHighlight> Next.js </SpanHighlight>,
              <SpanHighlight> Redux </SpanHighlight>,
              <SpanHighlight> jQuery </SpanHighlight>,
              <SpanHighlight> AJAX </SpanHighlight>,
              <SpanHighlight> Styled Components </SpanHighlight>,
              <SpanHighlight> MUI </SpanHighlight>,
              <SpanHighlight> SCSS / SASS </SpanHighlight>,
              <SpanHighlight> Bootstrap </SpanHighlight>,
              <SpanHighlight> GSAP </SpanHighlight>,
              <SpanHighlight> Firebase </SpanHighlight>
            </p>
          </div>
          <div id="uxui">
            <h3>UX / UI</h3>
            <p>
              Responsive Web Design, SEO principles, Adobe XD, Adobe Photoshop,
              REST APIs, Git, NPM
            </p>
          </div>
          <div id="education">
            <h3>Education</h3>

            <p>Frontend Web Development Brainster Academy - 2023</p>
          </div>
        </div>
      </div>
      <div id="davidImgContainer">
        <div
          className="c-glitch"
          style={{ backgroundImage: `url(${davidPic})` }}
        >
          <div
            className="c-glitch__img"
            style={{ backgroundImage: `url(${davidPic})` }}
          ></div>
          <div
            className="c-glitch__img"
            style={{ backgroundImage: `url(${davidPic})` }}
          ></div>
          <div
            className="c-glitch__img"
            style={{ backgroundImage: `url(${davidPic})` }}
          ></div>
          <div
            className="c-glitch__img"
            style={{ backgroundImage: `url(${davidPic})` }}
          ></div>
          <div
            className="c-glitch__img"
            style={{ backgroundImage: `url(${davidPic})` }}
          ></div>
        </div>
      </div>
    </PageStyledModified>
  );
};

export default AboutPage;

const PageStyledModified = styled<any>(PageStyled).attrs({
  className: "panel description",
  id: "about",
})`
  padding: ${spacings.XXL * 2}rem ${spacings.XXL}rem;
  height: 100vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: ${spacings.L}rem;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  h2 {
    font-size: ${spacings.XL * 2}rem;
    color: ${({ theme }) => theme.textColor};
    span {
      -webkit-text-stroke: 1px ${({ theme }) => theme.textColor};
      -webkit-text-fill-color: transparent;
    }
  }
  h3 {
    font-weight: 900;
    margin-top: ${spacings.XS}rem;
  }
`;

const SpanHighlight = styled.span.attrs({
  className: "highlight",
})`
  background-image: linear-gradient(yellow, yellow);
  background-size: 0 100%;
  transition: background-size 500ms ease-in;
  background-repeat: no-repeat;

  &:hover {
    background-size: 100% 100%;
  }
`;
