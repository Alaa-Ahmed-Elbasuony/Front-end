import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentTable from "../../components/ContentTable/ContentTable";
import { BaseURL, Token } from "../../../CONSTANTS";
import { format } from "date-fns";
import { styled } from "styled-components";

const Button = styled.button`
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DiscriptionOverlay = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 4px;
  max-width: 600px;
  width: 90%;
  position: relative;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.gray};
  font-size: 1.6rem;
  cursor: pointer;
`;

const Transaction = () => {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [selectedDescription, setSelectedDescription] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const handleViewDescription = (description) => {
    setSelectedDescription(description);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          BaseURL + "node-service/api/transactions",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: Token,
            },
          }
        );
        console.log(response.data);
        const { data } = response;
        const columns = [
          "Transaction Number",
          "Transaction Type",
          "Date",
          "Amount",
          "Description",
          "Full Description",
        ];
        const rows = data.map((transaction, index) => {
          const transactionDate = new Date(transaction.date);
          const formattedDate = format(transactionDate, "dd/MM/yyyy");

          return [
            index + 1,
            transaction.transType,
            formattedDate,
            `${transaction.amount} $`,
            transaction.description.length > 25
              ? transaction.description.slice(0, 25) + "..."
              : transaction.description,
            <Button
              onClick={() => handleViewDescription(transaction.description)}
            >
              Full Description
            </Button>,
          ];
        });

        setTableData({ columns, rows });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ContentTable title="Transaction" tabledata={tableData} />
      {showOverlay && (
        <Overlay className="overlay">
          <DiscriptionOverlay className="overlay-content">
            <h2>Full Description</h2>
            <p>{selectedDescription}</p>
            <CloseButton onClick={closeOverlay}>X</CloseButton>
          </DiscriptionOverlay>
        </Overlay>
      )}
    </div>
  );
};

export default Transaction;
