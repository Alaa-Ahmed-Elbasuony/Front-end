import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
`;

export const Card = styled.div`
  /* cursor: pointer; */
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.light_1};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: ${({ theme }) => theme.light_2};
  }
`;

export const Content = styled.p`
  font-size: 1.6rem;
  margin: 1rem;
`;

export const ButtonGroup = styled.div`
  align-self: end;
`;

export const Button = styled.span`
  padding: 8px 1.6rem;
  background-color: ${({ theme }) => theme.light_1};
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  /* cursor: pointer; */
  transition: background-color 0.3s;
  &:not(:last-child) {
    margin-right: 1rem;
  }
  & .blue {
    color: ${({ theme }) => theme.blue};
  }
`;
export const Publisher = styled.p`
  font-size: 1.3rem;
`;
