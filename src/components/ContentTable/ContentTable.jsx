import React from "react";
import { styled } from "styled-components";
import { Card_G } from "../utils/Globals";
import CustomTable from "../CustomTable/CustomTable";

const ContentCard = styled(Card_G)`
  flex-direction: column;
  & > h2 {
    font-size: 2.3rem;
    padding: 1rem 0;
  }
`;
const ContentTable = ({ title, tabledata }) => {
  console.log(tabledata);
  return (
    <ContentCard className="child">
      <h2>{title}</h2>
      <CustomTable tabledata={tabledata} />
    </ContentCard>
  );
};

export default ContentTable;
