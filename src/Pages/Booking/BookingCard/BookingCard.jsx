import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import {
  CardWrapper,
  BookingInfo,
  DateInfo,
  TimeInfo,
  BookingStatus,
  DoctorInfo,
  // IconsWrapper,
  DetailsBtn,
  Overlay,
  OverlayContent,
  OverlayTitle,
  OverlayText,
  OverlayImage,
  OverlayCloseButton,
} from "./BookingCardStyle";
import { URL_IMG } from "../../../../CONSTANTS";
const BookingCard = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const detailsHandler = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const { doctorId, patientId, status, price, day, startTime } = props.item;

  const parsedDoctorDate = day ? parseISO(day) : null;
  const formattedDoctorDate = parsedDoctorDate
    ? format(parsedDoctorDate, "dd/MM/yyyy")
    : "";

  const parsedDoctorTime = startTime ? parseISO(startTime) : null;
  const formattedDoctorTime = parsedDoctorTime
    ? format(parsedDoctorTime, "h:mm a")
    : "";

  const { name, pic } = patientId || {};
  const {
    name: drName,
    Specialization: specialty,
    pic: image,
    // pio,
  } = doctorId || {};
  return (
    <>
      <CardWrapper>
        <BookingInfo>
          <h3>{drName}</h3>
          <p>{specialty}</p>
          <DateInfo>
            <TimeInfo>{formattedDoctorTime}</TimeInfo>
            <BookingStatus>
              <span>Starts at {formattedDoctorDate}</span>
            </BookingStatus>
          </DateInfo>
        </BookingInfo>
        <hr />
        <DoctorInfo>
          <img src={URL_IMG + image} alt="doctor image" />
          <div className="doctor-info">
            <h4>{drName}</h4>
            {/* <p>{pio}</p> */}
            <p>Price: {price}</p>
          </div>
        </DoctorInfo>
        <hr />
        <DetailsBtn onClick={detailsHandler}>Booking Details</DetailsBtn>
      </CardWrapper>

      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <h2>Dr Info.</h2>
            <OverlayText>{drName}</OverlayText>
            <OverlayText>{specialty}</OverlayText>
            <OverlayImage src={URL_IMG + image} alt="doctor image" />
            {/* <OverlayText>{pio}</OverlayText> */}
            <br />
            <h2>Patient Info.</h2>
            <OverlayText>{name}</OverlayText>
            <OverlayImage src={URL_IMG + pic} alt="patient image" />
            <br />
            <OverlayTitle>Booking Details</OverlayTitle>
            <OverlayText>Time: {formattedDoctorTime}</OverlayText>
            <OverlayText>Starts at {formattedDoctorDate}</OverlayText>
            <span>Status: {status}</span>
            <span>Price: {price}</span>
            <OverlayCloseButton onClick={closeOverlay}>
              Close
            </OverlayCloseButton>
          </OverlayContent>
        </Overlay>
      )}
    </>
  );
};

export default BookingCard;
