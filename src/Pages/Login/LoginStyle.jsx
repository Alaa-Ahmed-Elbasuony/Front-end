import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    margin-top: 25px;
    font-size: 24px;
    margin-bottom: 10px;
  }
  & p {
    font-size: 16px;
    margin-bottom: 28px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  border-radius: 8px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.light_2};
  border: none;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 10px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;
