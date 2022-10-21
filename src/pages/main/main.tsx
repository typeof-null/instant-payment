import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { ROLES } from "../../shared/constants";
import { Provider } from "../../shared/types";
import PatientBadge from "../../shared/components/patient-badge";
import FindDoctorWidget from "./components/find-doctor-widget";

function Main() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") as string);

  const handlePickDoctor = (doctor: Provider) => {
    if (localStorage.getItem("provider")) {
      localStorage.removeItem("provider");
    }
    localStorage.setItem("provider", JSON.stringify(doctor));
    navigate("/payment");
  };

  return (
    <>
      <PatientBadge {...user} sx={{ marginBottom: "60px" }} />
      <Typography
        variant="h6"
        fontWeight={700}
        color="text.primary"
        sx={{ margin: "0 auto 20px" }}
      >
        {`Find ${user.role === ROLES.PATIENT ? "Doctor" : " Patient"}`}
      </Typography>
      <FindDoctorWidget onPickDoctor={handlePickDoctor} />
    </>
  );
}

export default Main;
