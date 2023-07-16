import styled from 'styled-components';
import { CardContainer_G, Card_G } from '../utils/Globals';

export const CardContainer = styled(CardContainer_G)`
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled(Card_G)`
  min-width: 24.5rem;
  height: 13rem;
  align-items: center;
  gap: 2rem;

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
  width: 80%; // have to set width to take effect
  font-size: 3.2rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap; // prevent from line break
  text-overflow: ellipsis;
`;
export const Title = styled.p``;
