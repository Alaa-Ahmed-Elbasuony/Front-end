import React, { useState, useEffect } from "react";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import ContentTable from "../../components/ContentTable/ContentTable";
import axios from "axios";
import { URL_IMG, BaseURL, Token } from "../../../CONSTANTS";
import { Btn, BtnContainer, PageButton, UserCell } from "./UsersStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const userComponent = (url) => {
  return (
    <UserCell>
      <img src={url} alt="doctor img" />
    </UserCell>
  );
};

function Users() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [pageNum, setPageNum] = useState(1);
  const [selectedOption, setSelectedOption] = useState("doctors"); // Default selected option value
  const [isNextPage, setIsNextPage] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setPageNum(1); // Reset page number when the selected option changes
  };

  const deleteUserHandler = (userId) => {
    const deleteUrl = BaseURL + `auth/v1/user/account/delete/${userId}`;

    axios
      .delete(deleteUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      })
      .then((response) => {
        // Handle success response, e.g., show a success message or update the table data
        fetchData(); // Fetch data again after successful deletion to update the table
        toast.success("Removed Successfully");
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., show an error message
        toast.success("Error Try Again Later");
      });
  };

  const fetchData = () => {
    const link =
      BaseURL +
      `auth/v1/users/role/${
        selectedOption === "doctors" ? "doctor" : "user"
      }/page-number/${pageNum}`;

    axios
      .get(link, {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      })
      .then((response) => {
        const users = response.data.objects;
        const columns =
          selectedOption === "doctors"
            ? [
                "Picture",
                "Dr Name",
                "National ID",
                "Gender",
                "Date Of Birth",
                "Remove User",
              ]
            : [
                "Name",
                "Gender",
                "National ID",
                "Date Of Birth",
                "Blood Type",
                "Remove User",
              ];
        const rows =
          selectedOption === "doctors"
            ? users.map((user) => [
                userComponent(
                  user.profilePictureUrl === ""
                    ? "./images/default.png"
                    : URL_IMG + user.profilePictureUrl
                ),
                user.fullName,
                user.nationalID === null ? "Not Provided" : user.nationalID,
                user.gender === "" ? "Not Provided" : user.gender,
                user.dateOfBirth,
                <Btn onClick={() => deleteUserHandler(user.id)}>
                  Delete User &nbsp;
                  <FontAwesomeIcon icon={faTrash} />
                </Btn>,
              ])
            : users.map((user) => [
                user.fullName,
                user.gender === "" ? "Not Provided" : user.gender,
                user.nationalID === null ? "Not Provided" : user.nationalID,
                user.dateOfBirth,
                user.bloodType,
                <Btn onClick={() => deleteUserHandler(user.id)}>
                  Delete User &nbsp;
                  <FontAwesomeIcon icon={faTrash} />
                </Btn>,
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
  }, [selectedOption, pageNum]); // Run the effect when selectedOption or pageNum changes

  const handleNextPage = () => {
    setPageNum(pageNum + 1);
  };

  const handlePreviousPage = () => {
    setPageNum(pageNum - 1);
  };

  return (
    <>
      <DropdownMenu onOptionChange={handleOptionChange} />{" "}
      {/* Pass the handleOptionChange function as a prop */}
      <ContentTable
        title={selectedOption === "doctors" ? "Doctors" : "Patients"}
        tabledata={tableData}
      />
      <BtnContainer>
        <PageButton onClick={handlePreviousPage} disabled={pageNum === 1}>
          Previous
        </PageButton>
        <PageButton onClick={handleNextPage} disabled={!isNextPage}>
          Next
        </PageButton>
      </BtnContainer>
      <ToastContainer />
    </>
  );
}

export default Users;
