import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 2rem;
  max-width: 50rem;
  width: 100%;
  border-radius: 4px;
`;

export const CommentItem = styled.div`
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  font-size: 1.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.dark};
`;
export const CommentPublisher = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 4px 7px;
  border: none;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.light_2};
    color: red;
  }
`;
