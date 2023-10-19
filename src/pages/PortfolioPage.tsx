import { useEffect, useRef } from "react";
import styled from "styled-components";
import { PageStyled } from "../styles/pages";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AliceCarousel from "react-alice-carousel";
import ProjectCard from "../components/ProjectCard";
import StreetArtistPng from "../assets/images/streetartist.png";
import velnesPng from "../assets/images/velnes.png";
import onlineShopPng from "../assets/images/onlineShop.png";
import portfolioPng from "../assets/images/portfolio.png";
import "react-alice-carousel/lib/alice-carousel.css";

gsap.registerPlugin(ScrollTrigger);

const PortfolioPage = () => {
  const animatedH2 = useRef<any>(null);
  useEffect(() => {
    gsap.to(animatedH2.current, {
      rotate: 90,
      scale: 3,
      position: "fixed",
      left: "-10px",
      top: "50%",
      display: "block",

      duration: 2,
      ease: "power3.inOut",

      scrollTrigger: {
        trigger: "#projects",
        start: "center",
        scrub: 1,
        end: "bottom 99%",
      },
    });
  }, []);

  const items = [
    <ProjectCard
      key={1}
      img={velnesPng}
      title="Velnes"
      desc="-Project goal is to create app for beauty salons, where clients can make appointments, see the salon reviews from other clients, see all information available for chosen salon(something like booking.com for beauty salons).

    -This project is built in React, with TypeScript. For styled systems, that use styled-components.
    
    -Client requirement was this app to be mobile only.
    
    -My side of job was to build only frontend side. firebase is temporary solution until backend comes in."
      link="https://github.com/DavidNikolovski24/velnes.mk"
      websiteLink="https://velnes-mk.vercel.app/"
    />,
    <ProjectCard
      key={2}
      img={StreetArtistPng}
      title="Street Artists"
      desc="-The purpose of this project was to practice and do a small review of my JavaScript learning.

    -The main idea was to create a mobile app for street artists and customers where they could meet each other. An artist can put their art up for auction. The customer can bid in the auction.
    
    -An API has been added for simulation where it simulates another guest placing bids on an auction.
    
    -This project is built in vanilla JavaScript. SASS was used for the styling system."
      link="https://github.com/DavidNikolovski24/street-artists"
      websiteLink="https://street-artists-zeta.vercel.app/"
    />,
    <ProjectCard
      key={3}
      img={onlineShopPng}
      title="Online Shop"
      desc="-The purpose of this project was to practice and do a small review of my Next 12 with TypeScript.

    -The main idea was to create a basic online shop where customers can look available products that shop offers.
    
    -An db.json has been added for simulation where it simulates real backend API.
    
    -This project is built in Next 12 with TypeScript. Bootstrap was used for the styling system."
      link="https://github.com/DavidNikolovski24/online-shop"
    />,
    <ProjectCard
      key={4}
      img={portfolioPng}
      title="Portfolio Website"
      desc="This Masterpiece 😍"
      link="https://github.com/DavidNikolovski24/DavidNikolovski24.github.io"
      websiteLink="https://davidnikolovski24.github.io/"
    />,
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
  };

  return (
    <PageStyledModified>
      <h2 ref={animatedH2}>PROJECTS</h2>
      <CarouselParentDiv>
        <AliceCarousel
          mouseTracking
          touchTracking
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          infinite
          autoPlayInterval={2500}
          paddingLeft={150}
          autoPlay
          autoPlayStrategy="action"
        />
      </CarouselParentDiv>
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
  padding-top: 100px;

  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColorThird};
  overflow: hidden;
  h2 {
    color: ${({ theme }) => theme.textColor};
    display: none;
    position: "fixed";
    left: "-10px";
    top: "50%";
  }
`;
const CarouselParentDiv = styled.div`
  max-width: 70%;
  min-width: 70%;
  margin-left: 40px;
  margin-bottom: 40px;

  max-height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 50px;
  padding: 30px;
  padding-left: 30px;
  * {
    box-sizing: border-box;
  }
`;
