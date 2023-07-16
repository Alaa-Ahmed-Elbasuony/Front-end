import { styled } from "styled-components";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

export const CardContainer_G = styled.div`
  background-color: ${({ theme }) => theme.light_1};
  display: flex;
  padding: 2.5rem;
`;
export const Card_G = styled.div`
  display: flex;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 2px 5px 10px ${({ theme }) => theme.light_2};
  border-radius: 10px;
`;

export const PagesContainer = styled.div`
  position: relative;
  /* margin-top: 8rem; */
  margin-left: ${({ sideopen }) => (sideopen ? "30rem" : "0")};
  width: calc(100% - ${({ sideopen }) => (sideopen ? "30rem" : 0)});
  transition: all 500ms;
`;

// STYLED
export const StledCircularProgress = styled(CircularProgress)`
  margin: auto;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
