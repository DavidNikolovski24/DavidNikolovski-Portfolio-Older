import styled from "styled-components";

export const PageStyled = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  * {
    transition: 1000ms;
  }
`;
