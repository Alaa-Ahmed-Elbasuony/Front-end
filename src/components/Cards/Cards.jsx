import React from "react";
import { Card, CardContainer, Statistic, Title } from "./CardsStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarCheck,
  faCalendarXmark,
} from "@fortawesome/free-regular-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";

const bookingStatistics = {
  total: 33,
  success: 22,
  canceled: 10,
  money: 50,
};
function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

function Cards() {
  const {
    isLoading,
    error,
    data: bookings,
  } = useQuery({
    queryFn: () => wait(1000).then(() => bookingStatistics),
    queryKey: ["bookingStatistics"],
  });

  return (
    <CardContainer>
      <Card>
        <div className=" cal total">
          <FontAwesomeIcon icon={faCalendar} />
        </div>
        <div>
          <Statistic>{isLoading ? "!!" : bookings.total}</Statistic>
          <Title>Total Bookings</Title>
        </div>
      </Card>
      <Card>
        <div className=" cal success">
          <FontAwesomeIcon icon={faCalendarCheck} />
        </div>
        <div>
          <Statistic>{isLoading ? "!!" : bookings.success}</Statistic>
          <Title>Booking Success</Title>
        </div>
      </Card>
      <Card>
        <div className="cal cancel">
          <FontAwesomeIcon icon={faCalendarXmark} />
        </div>
        <div>
          <Statistic>{isLoading ? "!!" : bookings.canceled}</Statistic>
          <Title>Booking Cancel</Title>
        </div>
      </Card>
      <Card>
        <div className="cal paid">
          <FontAwesomeIcon icon={faCircleDollarToSlot} />
        </div>
        <div>
          <Statistic>${isLoading ? "!!" : bookings.money}</Statistic>
          <Title>Paid Amount</Title>
        </div>
      </Card>
    </CardContainer>
  );
}

export default Cards;
