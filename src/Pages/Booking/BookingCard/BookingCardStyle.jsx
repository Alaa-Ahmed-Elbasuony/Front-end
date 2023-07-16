import { styled } from "styled-components";
import { Card_G } from "../../../components/utils/Globals";

export const CardWrapper = styled(Card_G)`
  /* min-height: 30rem; */
  flex-direction: column;
  gap: 2.5rem;
  font-size: 1.5rem;
`;
export const BookingInfo = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.dark};
  }
  & > p {
    color: ${({ theme }) => theme.primary};
  }
`;
export const DateInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TimeInfo = styled.p`
  color: ${({ theme }) => theme.dark};
`;
export const BookingStatus = styled.p`
  color: ${({ theme }) => theme.blue};
`;
export const DoctorInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 20%;
  }
`;
// export const IconsWrapper = styled.div`
//   display: flex;
//   gap: 1rem;
//   font-size: 2rem;
//   color: ${({ theme }) => theme.blue};
//   cursor: pointer;
// `;
export const DetailsBtn = styled.button`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  border: none;
  border-radius: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blueShade1};
  cursor: pointer;
  transition: all 100ms;
  &:hover {
    background-color: ${({ theme }) => theme.blue};
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const OverlayContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 40rem;
  text-align: center;
  & h2 {
    text-align: left;
  }
  & span {
    text-align: left;
    color: ${({ theme }) => theme.blue};
    font-size: 1.5rem;
    display: block;
  }
`;

export const OverlayTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: left;
`;

export const OverlayText = styled.p`
  font-size: 1.6rem;
  text-align: left;
  margin-bottom: 5px;
`;

export const OverlayImage = styled.img`
  max-width: 100%;
  height: 15rem;
  margin-bottom: 1rem;
`;

export const OverlayCloseButton = styled.button`
  background-color: ${({ theme }) => theme.remove};
  color: ${({ theme }) => theme.white};
  padding: 8px 1.6rem;
  border: none;
  border-radius: 4px;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.removeHover};
  }
`;
