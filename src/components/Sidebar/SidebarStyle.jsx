import styled from "styled-components";
import { StyledLink } from "../utils/Globals";
export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 30rem;
  height: 100vh;
  padding: 3rem;
  overflow-y: auto;
  z-index: 3;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 1rem ${({ theme }) => theme.light_2};

  transition: opacity 1s
    ${({ sideopen }) => (sideopen ? "step-start" : "step-end")};
  transition: transform 200ms
    ${({ sideopen }) => (sideopen ? "linear" : "step-start")};
  opacity: ${({ sideopen }) => (sideopen ? "1" : "0")};
  transform: translateX(${({ sideopen }) => (sideopen ? "0%" : "-200%")});
  & p {
    font-size: 1.6rem;
    padding-left: 1.4rem;
  }

  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.light_2};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.blue};
  }
`;
export const Logo = styled.img`
  width: 6rem;
  display: inline-block;
  height: 5rem;
`;
export const LT = styled.div`
  padding-bottom: 3.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Title = styled.span`
  padding-left: 1rem;
  font-weight: 700;
  font-size: 2.4rem;
`;

export const Tool = styled.p`
  text-align: center;
  margin: 5px 0;
  width: 20rem;
  border-radius: 15px;
  padding: 15px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-bottom: 1rem;
  &:hover {
    box-shadow: 2px 2px 5px ${({ theme }) => theme.dark};
  }
`;
export const Tools = styled.div`
  list-style-type: none;
  border-bottom: 1px solid ${({ theme }) => theme.dark};
  & ${StyledLink}:nth-of-type(${({ page }) => page}) {
    ${Tool} {
      background-color: ${({ theme }) => theme.blue};
      color: ${({ theme }) => theme.white};
    }
  }
`;
