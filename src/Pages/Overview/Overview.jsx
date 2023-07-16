import React, { useEffect } from "react";
import { Parent } from "./OverviewStyle";

import OV_Cards from "./OV_Cards/OV_Cards";
import AppointmentsTable from "./AppointmentsTable";
import AvailableDoctorsTable from "./AvailableDoctorsTable/AvailableDoctorsTable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Overview(props) {
  useEffect(() => {
    props.success && toast.success("Logged in successfully");
    return () => {
      props.setSuccess(false);
    };
  }, []);
  return (
    <>
      <OV_Cards />
      <Parent>
        <AppointmentsTable />
        <AvailableDoctorsTable />
        {/* <Child /> */}
        <ToastContainer />
      </Parent>
    </>
  );
}

export default Overview;
