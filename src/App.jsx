import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Overview from "./Pages/Overview/Overview";
import { Routes, Route } from "react-router-dom";
import Booking from "./Pages/Booking/Booking";
import Login from "./Pages/Login/Login";
import { PagesContainer } from "./components/utils/Globals";
import SideContext from "./context/SideContext";
import Settings from "./Pages/Settings/Settings";
import Users from "./Pages/Users/Users";
import Posts from "./Pages/Posts/Posts";
import Transaction from "./Pages/Transaction/Transaction";
import Checkups from "./Pages/Checkups/Checkups";

function App() {
  const [logged, setLogged] = useState(0);
  console.log(logged ? "Admin Logged✅" : "Not Logged❌");
  const { isSideOpen, setIsSideOpen } = useContext(SideContext);
  const [success, setSuccess] = useState();
  useEffect(() => {
    setIsSideOpen(0);
  }, []);

  const checkLoggedin = (isLogged) => {
    setLogged(isLogged);
  };

  if (!logged) {
    return <Login onLogin={checkLoggedin} setSuccess={setSuccess} />;
  }
  return (
    <>
      {logged !== 0 && <Sidebar />}
      <PagesContainer sideopen={isSideOpen}>
        {logged !== 0 && <Header />}
        <Routes>
          <Route
            path="/"
            element={<Overview success={success} setSuccess={setSuccess} />}
          />
          <Route path="/booking" element={<Booking />} />
          <Route path="/checkups" element={<Checkups />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </PagesContainer>
    </>
  );
}

export default App;
