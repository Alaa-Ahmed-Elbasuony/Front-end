import { styled } from "styled-components";

export const UserCell = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
`;

export const PageButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.blue};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.blueShade1};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.light_1};
    cursor: not-allowed;
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.white};
  margin-bottom: 2rem;
`;

export const Btn = styled.button`
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.remove};
  background-color: ${({ theme }) => theme.light_1};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.light_2};
    color: ${({ theme }) => theme.removeHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px ${({ theme }) => theme.dark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
