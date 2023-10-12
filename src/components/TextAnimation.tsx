import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  return (
    <ContainerTextAnimation>
      <H2Styled className="text">
        FEEL<span>TRY MORE</span>
      </H2Styled>
      <H2Styled className="text">
        FREE<span>ONE MORE</span>
      </H2Styled>
      <H2Styled className="text">
        TO<span>LAST</span>
      </H2Styled>
      <H2Styled className="text">
        REACH
        <span>
          <a
            href=" https://mk.linkedin.com/in/david-nikolovski-328394238"
            target="_blank"
          >
            LINKEDIN
          </a>
        </span>
      </H2Styled>
      <H2Styled className="text">
        ME
        <span>
          <a href="mailto:david.nikolovski.00@gmail.com" target="_blank">
            GMAIL
          </a>
        </span>
      </H2Styled>
    </ContainerTextAnimation>
  );
};

export default TextAnimation;

const ContainerTextAnimation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 100%;
`;
const H2Styled = styled.h2`
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;
  font-size: 5rem;

  width: 100%;
  color: ${({ theme }) => theme.textColor};
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;

  border-bottom: 1px solid ${({ theme }) => theme.textColor};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  &:hover > span {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.backgroundColor};
    text-align: center;
    clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
    transform-origin: center;
    transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
