import styled from "styled-components";
import { PageStyled } from "../styles/pages";
import BulbBackgroundImage from "../assets/images/bulbs.jpg.jpg";
import { spacings } from "../styles/themeStyles";
// @ts-ignore
import { MovingComponent } from "react-moving-text";
const HomePage = () => {
  return (
    <PageStyledModified id="home">
      <BannerDiv>
        <MovingComponentModified
          type="glowing"
          duration="1000ms"
          delay="0.5s"
          direction="normal"
          timing="ease"
          iteration="2"
          fillMode="none"
        >
          Design Is Not Just What Is Looks Like And Feels Like. Design Is How It
          Works.
        </MovingComponentModified>
      </BannerDiv>
    </PageStyledModified>
  );
};

export default HomePage;
const PageStyledModified = styled<any>(PageStyled)`
  background-image: url(${BulbBackgroundImage});
  background-color: ${({ theme }) => theme.bannerBlend};
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  background-blend-mode: darken;
  background-attachment: fixed;
`;
const BannerDiv = styled.div`
  background-color: white;
  text-align: center;
  margin: 0 ${spacings.XXL}rem;
  padding: ${spacings.XL}rem;
  font-size: ${spacings.XXL}rem;

  * {
    color: ${({ theme }) => theme.textColor};
  }
`;
const MovingComponentModified = styled(MovingComponent)`
  text-shadow: 5px 0px 2px ${({ theme }) => theme.backgroundColor};
`;
