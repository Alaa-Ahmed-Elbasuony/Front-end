import React, { useEffect, useState } from "react";
import ContentTable from "../../components/ContentTable/ContentTable";
import { BaseURL, Token, URL_IMG } from "../../../CONSTANTS";
import { BtnContainer, PageButton } from "../Users/UsersStyle";
import axios from "axios";
import { styled } from "styled-components";

const UserCell = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & img {
    width: 4rem;
    height: 4rem;
  }
  h2 {
    font-size: 1.4rem;
  }
`;

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

const PrescriptionOverlay = styled.div`
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

const userComponent = (url, name) => {
  return (
    <UserCell>
      <img src={URL_IMG + url} alt={name + " image"} />
      <h2>{name}</h2>
    </UserCell>
  );
};

const Checkups = () => {
  const [pageNum, setPageNum] = useState(1);
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [isNextPage, setIsNextPage] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  const fetchData = () => {
    const link =
      BaseURL + `medical-services/v1/check/get-checks/page-number/${pageNum}`;

    axios
      .get(link, {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      })
      .then((response) => {
        const users = response.data.objects;
        const columns = [
          "Doctor Profile",
          "Patient Name",
          "Prescription",
          "View Full Prescription",
        ];
        const rows = users.map((user) => [
          userComponent(
            user.doctor.user.profilePictureUrl,
            user.doctor.user.fullName
          ),
          user.patient.user.fullName,
          user.report.length > 25
            ? user.report.slice(0, 25) + "..."
            : user.report
            ? user.report
            : "No info.",
          <Button onClick={() => handleViewPrescription(user.report)}>
            Full Prescription
          </Button>,
        ]);
        setTableData({ columns, rows });
        setIsNextPage(response.data.isNextPage);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [pageNum]);

  const handleNextPage = () => {
    setPageNum(pageNum + 1);
  };

  const handlePreviousPage = () => {
    setPageNum(pageNum - 1);
  };

  const handleViewPrescription = (prescription) => {
    setSelectedPrescription(prescription);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setSelectedPrescription(null);
    setShowOverlay(false);
  };

  return (
    <>
      <ContentTable title="Checkups" tabledata={tableData} />
      {showOverlay && (
        <Overlay>
          <PrescriptionOverlay>
            <CloseButton onClick={closeOverlay}>X</CloseButton>
            <h2>Full Prescription</h2>
            <p>{selectedPrescription}</p>
          </PrescriptionOverlay>
        </Overlay>
      )}
      <BtnContainer>
        <PageButton onClick={handlePreviousPage} disabled={pageNum === 1}>
          Previous
        </PageButton>
        <PageButton onClick={handleNextPage} disabled={!isNextPage}>
          Next
        </PageButton>
      </BtnContainer>
    </>
  );
};

export default Checkups;
