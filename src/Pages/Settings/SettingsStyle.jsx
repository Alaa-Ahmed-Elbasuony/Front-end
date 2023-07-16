import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 6rem;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5rem;
`;
export const ParaSection = styled.div`
  border-bottom: 2px solid #ddd;
  width: 50%;
  margin-bottom: 2rem;
`;
export const Para = styled.p`
  font-size: 1.6rem;
`;
export const Label = styled.label`
  font-size: 1.5rem;
  display: block;
`;
export const Input = styled.input`
  width: 45rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  border: none;
  display: block;
  background-color: ${({ theme }) => theme.light_2};
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const Button = styled.button`
  display: block;
  margin-bottom: 3rem;
  padding: 0.5rem 1rem;
  height: 3rem;
  border: none;
  background-color: ${({ theme }) => theme.darkGreen};
  color: ${({ theme }) => theme.white};
  font-size: 1.4rem;
  cursor: pointer;
  border-radius: 0.8rem;
`;
