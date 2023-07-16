import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  GridContainer,
  Input,
  Label,
  Para,
  ParaSection,
} from "./SettingsStyle";
import { BaseURL, Token } from "../../../CONSTANTS";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const [newEmail, setNewEmail] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [base64Image, setBase64Image] = useState("");

  const handleNewEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setNewUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmailButtonClick = () => {
    axios
      .post(
        BaseURL + "auth/v1/email/change",
        { newEmail },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: Token,
          },
        }
      )
      .then((response) => {
        toast.success("Email updated successfully");
        console.log("Email updated:", newEmail);
        // Perform any other necessary actions upon successful email update
      })
      .catch((error) => {
        const [firstValue] = Object.values(error.response.data.errors)[0];
        toast.error(firstValue);
        console.error("Error updating email:", error);
        // Handle error scenarios if necessary
      });
  };

  const handleNameButtonClick = () => {
    axios
      .post(
        BaseURL + "auth/v1/name/change",
        { newUserName },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: Token,
          },
        }
      )
      .then((response) => {
        toast.success("Name updated successfully");
        console.log("Name updated:", newUserName);
        // Perform any other necessary actions upon successful name update
      })
      .catch((error) => {
        const [firstValue] = Object.values(error.response.data.errors)[0];
        toast.error(firstValue);
        console.error("Error updating name:", error);
        // Handle error scenarios if necessary
      });
  };

  const handlePasswordButtonClick = () => {
    axios
      .post(
        BaseURL + "auth/v1/password/change",
        { oldPassword: password, newPassword: newPassword },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: Token,
          },
        }
      )
      .then((response) => {
        toast.success("Changed successfully");
        console.log(response.data);
        // Perform any other necessary actions upon successful password update
      })
      .catch((error) => {
        const [firstValue] = Object.values(error.response.data.errors)[0];
        toast.error(firstValue);
        console.error("Error updating password:", error);
        // Handle error scenarios if necessary
      });
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      const base64Data = base64Image.substring(
        base64Image.indexOf("base64,") + 7
      );

      axios
        .post(
          BaseURL + "auth/v1/profile/picture/upload",
          { Base64Picture: base64Data },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: Token,
            },
          }
        )
        .then((response) => {
          toast.success("Image uploaded successfully");
          console.log("Image uploaded");
          // Perform any other necessary actions upon successful image upload
          navigate("/");
        })
        .catch((error) => {
          toast.error("Failed to upload image");
          console.error("Error uploading image:", error);
          // Handle error scenarios if necessary
        });
    } else {
      toast.error("No image selected");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <ParaSection>
        <Para>Personal Settings</Para>
      </ParaSection>
      <GridContainer>
        <form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input
            type="email"
            value={newEmail}
            placeholder="New Email"
            onChange={handleNewEmailChange}
          />
          <Button onClick={handleEmailButtonClick}>Change Email</Button>
        </form>
        <form onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input
            type="text"
            value={newUserName}
            placeholder="New Admin Name"
            onChange={handleNameChange}
          />
          <Button onClick={handleNameButtonClick}>Change Name</Button>
        </form>
        <form onSubmit={handleSubmit}>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            placeholder="Old Password"
            onChange={handlePasswordChange}
          />
          <Input
            type="password"
            value={newPassword}
            placeholder="New Password"
            onChange={handleNewPasswordChange}
          />
          <Button onClick={handlePasswordButtonClick}>Change Password</Button>
        </form>
        <form onSubmit={handleSubmit}>
          <Label>Change Image</Label>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {base64Image && <img src={base64Image} alt="Selected Image" />}
          <Button onClick={handleImageUpload}>Upload Image</Button>
        </form>
      </GridContainer>
      <ToastContainer />
    </Container>
  );
}

export default Settings;
