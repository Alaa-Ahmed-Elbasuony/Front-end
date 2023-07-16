import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarCheck,
  faCalendarXmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircleDollarToSlot,
  faUserDoctor,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BaseURL, Token } from "../../../../CONSTANTS";
import {
  Card,
  CardContainer,
  Overlay,
  OverlayContent,
  Statistic,
  Title,
} from "./OV_CardsStyle";

function Cards() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayContent, setOverlayContent] = useState("");
  const [overlayStatistics, setOverlayStatistics] = useState("");
  const [totalBooked, setTotalBooked] = useState(0);
  const [canceled, setCanceled] = useState(0);
  const [approved, setApproved] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);

  useEffect(() => {
    axios
      .get(BaseURL + "node-service/api/appointment/booking-statistics", {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      })
      .then((response) => {
        const data = response.data;
        setTotalBooked(data.totalBooked);
        setCanceled(data.canceled);
        setApproved(data.approved.approved);
        setTotalPaid(data.approved.total_price);
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  }, []);

  const handleCardClick = (content, num) => {
    setOverlayContent(content);
    setOverlayStatistics(num);
    setShowOverlay(true);
  };

  return (
    <>
      <CardContainer>
        <Card onClick={() => handleCardClick("Total Booking", totalBooked)}>
          <>
            <div className="cal total">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div>
              <Statistic>{totalBooked}</Statistic>
              <Title>Total Booking</Title>
            </div>
          </>
        </Card>
        <Card onClick={() => handleCardClick("Booking Success", approved)}>
          <>
            <div className="cal success">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <div>
              <Statistic>{approved}</Statistic>
              <Title>Booking Success</Title>
            </div>
          </>
        </Card>
        <Card onClick={() => handleCardClick("Booking Cancel", canceled)}>
          <>
            <div className="cal cancel">
              <FontAwesomeIcon icon={faCalendarXmark} />
            </div>
            <div>
              <Statistic>{canceled}</Statistic>
              <Title>Booking Cancel</Title>
            </div>
          </>
        </Card>
        <Card onClick={() => handleCardClick("Paid Amount", totalPaid)}>
          <>
            <div className="cal paid">
              <FontAwesomeIcon icon={faCircleDollarToSlot} />
            </div>
            <div>
              <Statistic>${totalPaid}</Statistic>
              <Title>Paid Amount</Title>
            </div>
          </>
        </Card>
      </CardContainer>

      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <h3>{overlayContent}</h3>
            <Statistic>{overlayStatistics}</Statistic>
            <button onClick={() => setShowOverlay(false)}>Close</button>
          </OverlayContent>
        </Overlay>
      )}
    </>
  );
}

export default Cards;
