import styled, { css } from "styled-components";
import { spacings } from "../styles/themeStyles";
import { Cross as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import BulbSwitcher from "./BulbSwitcher/BulbSwitcher";
import { ReactDimmer } from "react-dimmer";
import ResumePDF from "../assets/DavidNikolovskiResume (5).pdf";
import FullLogo from "../assets/Logo/FullLogo.png";

interface Props {
  changingTheme: string;
  setChangingTheme: (arg: "dark" | "light") => void;
}

const Navbar = ({ changingTheme, setChangingTheme }: Props) => {
  const [isOpenHam, setIsOpenHam] = useState(false);
  const [currentURL, setCurrentURL] = useState(window.location.pathname);
  window.addEventListener("hashchange", function (event) {
    setCurrentURL(event.newURL);
  });

  useEffect(() => {
    if (isOpenHam) setIsOpenHam(false);
  }, [currentURL]);

  return (
    <>
      <NavbarStyled>
        <LogoContainer>
          <a href="#home">
            <LogoImg src={FullLogo} alt="Logo" />
          </a>
        </LogoContainer>
        <IconDiv>
          <BulbSwitcher
            changingTheme={changingTheme}
            setChangingTheme={setChangingTheme}
          />

          <Hamburger
            toggled={isOpenHam}
            toggle={setIsOpenHam}
            color={changingTheme === "light" ? "#08171e" : "#a1ccdc"}
            easing="ease-out"
          />
        </IconDiv>

        <MenuParentDiv data-ismodalopen={isOpenHam}>
          <div>
            <UlStyled>
              <LiStyled>
                <a href="#home">Home</a>
              </LiStyled>
              <LiStyled>
                <a href="#about">About</a>
              </LiStyled>
              <LiStyled>
                <a href="#projects">Portfolio</a>
              </LiStyled>
              <LiStyled>
                <a href="#contact">Contact</a>
              </LiStyled>
              <LiStyled>
                <a href={ResumePDF} target="_blank">
                  Resume
                </a>
              </LiStyled>
            </UlStyled>
          </div>
        </MenuParentDiv>
      </NavbarStyled>
      <ReactDimmer
        isOpen={isOpenHam}
        exitDimmer={setIsOpenHam}
        zIndex={50}
        opacity={0}
      />
    </>
  );
};

export default Navbar;

const LogoImg = styled.img`
  width: 10rem;
  filter: ${({ theme }) => theme.logoFilter};
  color: ${({ theme }) => theme.textColor};
  transition: 0s !important;
`;

const LogoContainer = styled.div``;

const NavbarStyled = styled.nav`
  color: ${({ theme }) => theme.textColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${spacings.XL}rem;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  * {
    transition: 1000ms;
  }
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.L}rem;
`;

const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacings.XL}rem;
`;
const LiStyled = styled.li`
  font-size: ${spacings.XL}rem;
  display: flex;
  align-items: "center";
  a {
    color: ${({ theme }) => theme.textColor};
  }
`;
const openModalStyles = css`
  transform: translateX(0%);
`;
const MenuParentDiv = styled.div<any>`
  color: ${({ theme }) => theme.textColor};
  opacity: 1;
  min-height: 100vh;
  min-width: 40vw;
  margin-left: 60vw;
  background-color: ${({ theme }) => theme.backgroundColorThird};
  z-index: -1;
  overflow: auto;
  transform: translateX(200%);
  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  padding: 22px 24px 32px 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacings.XL}rem;
  flex-shrink: 0;
  border-radius: 26px 0px 0px 26px;
  border: 1px solid rgb(171 237 249 / 50%);
  box-shadow: 0px 2px 18px 0px rgb(171 237 249 / 50%);
  transition: 1000ms;
  &[data-ismodalopen="true"] {
    ${openModalStyles}
  }
`;
