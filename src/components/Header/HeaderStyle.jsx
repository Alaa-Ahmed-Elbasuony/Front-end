import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* position: fixed; */
  /* max-width: calc(1600px - 30rem); */
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem 0 5rem;
  /* background-color: ${({ theme }) => theme.light_1}; */
  border-bottom: 1px solid #000;
  & .burger {
    display: ${({ sideopen }) => (sideopen ? "none" : "inline-block")};
  }
`;

export const Admin = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-start;
`;

export const UserImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const HeaderText = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  & .burger:hover {
    box-shadow: 2px 2px 5px ${({ theme }) => theme.blue};
  }
  & .burger {
    font-size: 4rem;
    border-radius: 1rem;
    padding: 0.5rem;
    /* background-color: ${({ theme }) => theme.blue}; */
    /* color: ${({ theme }) => theme.white}; */
    cursor: pointer;
  }
`;
export const User = styled.p`
  font-size: 1.5rem;
  margin-left: 1rem;
`;
export const Welcome = styled.h2`
  font-size: 2.5rem;
`;
export const SearchInput = styled.input`
  outline: none;
  font-size: 1.6rem;
  border-radius: 5px;
  width: 25rem;
  height: 4rem;
  border: 1px solid #898989f9;
  padding-left: 1rem;
`;
