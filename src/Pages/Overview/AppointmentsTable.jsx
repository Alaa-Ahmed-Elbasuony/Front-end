import { useEffect, useState } from "react";
import ContentTable from "../../components/ContentTable/ContentTable";
import { styled } from "styled-components";
import { URL_IMG } from "../../../CONSTANTS";
// import { Token } from "../../../CONSTANTS";
// import axios from "axios";

const UserComponentStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  h2 {
    font-size: 1.5rem;
  }
`;

const userComponent = (url, name) => {
  return (
    <UserComponentStyled>
      <img src={url} alt="doctor img" />
      <h2>{name}</h2>
    </UserComponentStyled>
  );
};

const AppointmentsTable = () => {
  const [tabledata, setTableData] = useState({ columns: [], rows: [] });

  useEffect(() => {
    const columns = ["Dr Profile", "Specialty", "Date", "Time"];
    const rows = [
      [
        userComponent("./images/doha.jpg", "Doha Elsayed"),
        "dental",
        "01/08/2023",
        "10:00 AM : 11:00 AM",
        "this is my bio 👨‍👨‍👧",
      ],
      [
        userComponent("./images/doha.jpg", "Doha Elsayed"),
        "dental",
        "02/08/2023",
        "11:00 AM : 12:00 AM",
        "this is my bio 👨‍👨‍👧",
      ],
      [
        userComponent("./images/doha.jpg", "Doha Elsayed"),
        "dental",
        "03/08/2023",
        "11:00 AM : 12:00 AM",
        "this is my bio 👨‍👨‍👧",
      ],
      [
        userComponent("./images/doha.jpg", "Doha Elsayed"),
        "dental",
        "04/08/2023",
        "10:00 AM : 11:00 AM",
        "this is my bio 👨‍👨‍👧",
      ],
      [
        userComponent("./images/doha.jpg", "Doha Elsayed"),
        "dental",
        "05/08/2023",
        "10:00 AM : 11:00 AM",
        "this is my bio 👨‍👨‍👧",
      ],
      [
        userComponent("./images/doha.jpg", "Doha Elsayed"),
        "dental",
        "06/08/2023",
        "10:00 AM : 11:00 AM",
        "this is my bio 👨‍👨‍👧",
      ],
    ];

    setTableData({ columns, rows });
  }, []);

  return <ContentTable title="Booked Appointments" tabledata={tabledata} />;
};

export default AppointmentsTable;
