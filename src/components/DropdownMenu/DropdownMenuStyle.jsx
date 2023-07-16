import styled from "styled-components";

export const Selector = styled.select`
  padding: 0.8rem;
  margin-top: 1rem;
  margin-left: 5rem;
  border: 2px solid #ddd;
  width: 25rem;
  font-size: 1.3rem;
  border-radius: 4px;
  background-color: #f9f9f9;
  color: #333;
  outline: none;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: #aaa;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem #007bff3f;
  }

  option {
    color: #333;
    background-color: #f9f9f9;
  }
`;
