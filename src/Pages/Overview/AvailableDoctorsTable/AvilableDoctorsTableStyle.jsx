import { styled } from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 1rem;
`;
export const DrCard = styled.div`
  padding: 0.5rem 1.5rem;
  text-align: center;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.light_2};
`;
export const Rate = styled.p``;
export const DrName = styled.h2`
  font-size: 2rem;
`;
export const Speaialist = styled.p``;
export const DrImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
