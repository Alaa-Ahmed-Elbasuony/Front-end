import React, { useContext, useEffect, useState } from "react";
import {
  Admin,
  HeaderContainer,
  HeaderText,
  User,
  UserImage,
  Welcome,
} from "./HeaderStyle";
import { pages } from "../utils/data";
import { useLocation } from "react-router-dom";
import SideContext from "../../context/SideContext";
import { CiMenuBurger } from "react-icons/ci";
import { BaseURL, Token, URL_IMG } from "../../../CONSTANTS";
import axios from "axios";
import { StyledLink } from "../utils/Globals";

function Header() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState(pages["/"].name);
  const { isSideOpen, setIsSideOpen } = useContext(SideContext);
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    pages[location.pathname]?.name &&
      setPageTitle(pages[location.pathname].name);

    axios
      .get(`${BaseURL}auth/v1/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserName(response.data.fullName);
        setUserImage(response.data.profilePictureUrl);
        console.log(response.data.profilePictureUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [location]);

  return (
    <HeaderContainer sideopen={isSideOpen}>
      <HeaderText>
        <CiMenuBurger className="burger" onClick={() => setIsSideOpen(1)} />
        <div>
          <StyledLink to="/settings">
            <Admin>
              {userImage && <UserImage src={URL_IMG + userImage} alt="User" />}
              <User>Hi {userName}</User>
            </Admin>
          </StyledLink>
          <Welcome>{pageTitle}</Welcome>
        </div>
      </HeaderText>
      {/* <div>
        <SearchInput type='text' placeholder='Search' />
      </div> */}
    </HeaderContainer>
  );
}

export default Header;
