import React, { useContext, useEffect, useState } from "react";
import { LT, Logo, SidebarContainer, Title, Tool, Tools } from "./SidebarStyle";
import LOGO from "./Logo/img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChartPie,
  faEnvelopesBulk,
  faGear,
  faHouseChimneyWindow,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { pages } from "../utils/data";
import SideContext from "../../context/SideContext";
import { StyledLink } from "../utils/Globals";

function Sidebar() {
  // HOOKS
  const [pageIndex, setPageIndex] = useState(1);
  const location = useLocation();
  const { isSideOpen, setIsSideOpen } = useContext(SideContext);

  useEffect(() => {
    pages[location.pathname]?.index &&
      setPageIndex(pages[location.pathname].index);
  }, [location]);

  // HANDLERS

  return (
    <SidebarContainer sideopen={isSideOpen}>
      <LT onClick={() => setIsSideOpen(0)}>
        <Logo src={LOGO} alt="Our Logo" />
        <Title>DiagnoseMe</Title>
      </LT>
      <p>Admin Services</p>
      <Tools page={pageIndex}>
        <StyledLink to="/">
          <Tool>
            <FontAwesomeIcon icon={faHouseChimneyWindow} />
            Overview
          </Tool>
        </StyledLink>
        <StyledLink to="/booking">
          <Tool>
            <FontAwesomeIcon icon={faChartPie} />
            Booking Activity
          </Tool>
        </StyledLink>
        <StyledLink to="/checkups">
          <Tool>
            <FontAwesomeIcon icon={faBriefcase} />
            Checkups
          </Tool>
        </StyledLink>
        <StyledLink to="/transaction">
          <Tool>
            <FontAwesomeIcon icon={faWallet} />
            Transaction
          </Tool>
        </StyledLink>
        <StyledLink to="/posts">
          <Tool>
            <FontAwesomeIcon icon={faEnvelopesBulk} />
            Posts
          </Tool>
        </StyledLink>
        <StyledLink to="/users">
          <Tool>
            <FontAwesomeIcon icon={faUsers} />
            Users
          </Tool>
        </StyledLink>
        <StyledLink to="/settings">
          <Tool>
            <FontAwesomeIcon icon={faGear} />
            Settings
          </Tool>
        </StyledLink>
      </Tools>
    </SidebarContainer>
  );
}

export default Sidebar;
