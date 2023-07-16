import axios from "axios";
import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  LoginContainer,
} from "./LoginStyle";
import LOGO from "../../components/Sidebar/Logo/img.png";
import { Logo } from "../../components/Sidebar/SidebarStyle";
import { useNavigate } from "react-router-dom";
import { BaseURL, updateToken } from "../../../CONSTANTS";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ onLogin, setSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${BaseURL}auth/v1/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        const { token } = response.data;
        updateToken(token); // Update the Token value
        onLogin(response.data && 1);
        navigate("/");
        setSuccess(true);
      })
      .catch((error) => {
        toast.error("Username/Email or Password is incorrect");
        console.error(error);
      });
  };

  useEffect(() => {
    if (navigate.pathname === "/") {
      toast.success("Login successful!");
    }
  }, [navigate]);

  return (
    <LoginContainer>
      <Logo src={LOGO} alt="Our Logo" />
      <h2>Login</h2>
      <p>Please enter your email address</p>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />

          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />

          <Button type="submit">Login</Button>
        </Form>
      </Container>
      <ToastContainer />
    </LoginContainer>
  );
}

export default Login;
