import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { CardContainer_G } from "../../components/utils/Globals";
import BookingCard from "./BookingCard/BookingCard";
import axios from "axios";
import { BaseURL, Token } from "../../../CONSTANTS";

const BookinggPageWrapper = styled(CardContainer_G)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`;

const Booking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BaseURL + "node-service/api/appointment/get-all-bookings-admin/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <BookinggPageWrapper>
      {data.length > 0 &&
        data.map((item, i) => <BookingCard item={item} key={i} />)}
    </BookinggPageWrapper>
  );
};

export default Booking;
