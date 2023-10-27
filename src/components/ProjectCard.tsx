import styled from "styled-components";
import { spacings } from "../styles/themeStyles";

interface Props {
  img: string;
  title: string;
  desc: string;
  link: string;
  websiteLink?: string;
}

const ProjectCard = ({ title, img, desc, link, websiteLink }: Props) => {
  let splitedText = desc.split("-");

  let paragraphs = splitedText.map((p) => <p key={p}>-{p}</p>);

  return (
    <CardContainer>
      <ImageContainer img={img}>
        <figcaption>
          <h3>{title}</h3>
          {paragraphs}
          <a href={link} target="_blank">
            SOURCE CODE
          </a>

          <a href={websiteLink} target="_blank">
            {websiteLink ? "VISIT WEBSITE" : "LINK NOT AVAILABLE"}
          </a>
        </figcaption>
      </ImageContainer>
    </CardContainer>
  );
};

export default ProjectCard;

const CardContainer = styled.div.attrs({
  className: "hover",
})`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 1rem;

  max-width: 315px;
  min-width: 230px;

  height: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;
  min-height: 100%;

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.45s ease;
    transition: all 0.45s ease;
  }
  &:after {
    background-color: ${({ theme }) => theme.textColor};
    height: 150%;
    bottom: -145%;
    content: "";
    left: 0;
    right: 0;
    position: absolute;

    -webkit-transition: all 0.5s linear;
    transition: all 0.5s linear;
  }
  figcaption {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    opacity: 0;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
    transition-duration: 0.5s;
    background-color: ${({ theme }) => `${theme.backgroundColor}b5`};
    overflow: hidden;

    height: 100%;
    box-sizing: border-box;
    padding: 1rem;

    a {
      color: ${({ theme }) => theme.backgroundColor};
      background-color: ${({ theme }) => theme.textColor};

      margin-top: ${spacings.XS}rem;
      padding: 10px 20px;
      border-radius: 10px;

      display: none;
      &:hover {
        background-color: ${({ theme }) => theme.backgroundColorThird};
        color: ${({ theme }) => theme.textColor};
      }
    }
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0;
    text-transform: uppercase;

    font-weight: 900;
  }

  &:hover > .image-container {
    opacity: 0.2;
  }
  &:hover:after {
    bottom: 95%;
  }
  &:hover figcaption {
    opacity: 1;
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
    a {
      display: inline-block;
    }
  }
`;

const ImageContainer = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  height: 450px;
  width: 100%;
  opacity: 1;
  transition: opacity 0.45s ease;

  figcaption {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
