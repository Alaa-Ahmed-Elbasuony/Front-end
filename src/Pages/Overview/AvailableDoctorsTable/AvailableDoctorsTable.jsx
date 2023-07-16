import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import {
  CardWrapper,
  DrCard,
  Rate,
  DrName,
  Speaialist,
  DrImage,
  CardContainer,
  DataWrapper,
} from "./AvilableDoctorsTableStyle";
import { Card_G } from "../../../components/utils/Globals";
import { URL_IMG, BaseURL, Token } from "../../../../CONSTANTS";
import axios from "axios";

const ContentCard = styled(Card_G)`
  flex-direction: column;
`;
const AvailableDoctorsTable = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios
      .get(BaseURL + "medical-services/v1/doctors/popuplar", {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      })
      .then((response) => {
        const extractedData = response.data.objects.map((doctor) => {
          return {
            id: doctor.user.id,
            title: doctor.clinicSpecialization,
            averageRate: doctor.averageRate,
            fullName: doctor.user.fullName,
            imgURL: doctor.user.profilePictureUrl,
          };
        });
        setPopular(extractedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Access the data in the `popular` variable in your component as needed

  return (
    <ContentCard className="child">
      <h2>Populer Doctors</h2>
      <CardWrapper>
        {popular.slice(0, 4).map((doctor, i) => (
          <DrCard key={i}>
            <CardContainer>
              <DrImage
                src={
                  doctor.imgURL === ""
                    ? "./images/default.png"
                    : URL_IMG + doctor.imgURL
                }
                alt="Dr image"
              />
              <DataWrapper>
                <DrName>{doctor.fullName}</DrName>
                <Speaialist>
                  {doctor.title === null ? "Recently added" : doctor.title}
                </Speaialist>
                <Rate>
                  {doctor.averageRate === 0
                    ? "No one rated him"
                    : doctor.averageRate}
                  ⭐
                </Rate>
              </DataWrapper>
            </CardContainer>
          </DrCard>
        ))}
      </CardWrapper>
    </ContentCard>
  );
};

export default AvailableDoctorsTable;
