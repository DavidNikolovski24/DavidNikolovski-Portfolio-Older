import styled from "styled-components";
import { PageStyled } from "../styles/pages";
import TextAnimation from "../components/TextAnimation";

const ContactPage = () => {
  return (
    <PageStyledModified>
      <TextAnimation />
    </PageStyledModified>
  );
};

export default ContactPage;
const PageStyledModified = styled<any>(PageStyled).attrs({
  id: "contact",
})`
  display: flex;

  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  h4 {
    margin-bottom: 20px;
    font-size: 1rem;
  }
`;
