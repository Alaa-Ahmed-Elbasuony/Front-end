import styled from "styled-components";
import { CardContainer_G, Card_G } from "../../../components/utils/Globals";

export const CardContainer = styled(CardContainer_G)`
  gap: 2rem;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Card = styled(Card_G)`
  min-width: 24.5rem;
  height: 13rem;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  border-radius: 3rem;

  & > div:last-child {
    flex-grow: 1;
  }
  & > div:first-child {
    padding: 3rem;
  }
  & .cal {
    font-size: 3.2rem;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  & .total {
    color: ${({ theme }) => theme.blue};
    background-color: #ecfcfc;
  }
  & .success {
    color: ${({ theme }) => theme.green};
    background-color: #ecf4e4;
  }
  & .cancel {
    color: red;
    background-color: #ffecec;
  }
  & .paid {
    color: green;
    background-color: #ecf4e4;
  }
`;
export const Statistic = styled.p`
  /* width: 80%; // have to set width to take effect */
  font-size: 3.2rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap; // prevent from line break
  text-overflow: ellipsis;
`;
export const Title = styled.p``;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OverlayContent = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  width: 30rem;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 1rem 2.5rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.white};
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
