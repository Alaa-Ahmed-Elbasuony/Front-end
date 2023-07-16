import styled from "styled-components";
import { CardContainer_G } from "../../components/utils/Globals";

export const Parent = styled(CardContainer_G)`
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-gap: 5rem;

  /* & > :nth-child(1) {
    order: 1;
    grid-column: span 3;
    flex-direction: column;
  }
  & > :nth-child(2) {
    order: 3;
    grid-column: span 3;
  }
  & > :nth-child(3) {
    order: 2;
    grid-column: span 2;
    flex-direction: column;
  } */
`;

// export const Child = styled(Card_G)``;
