import React from "react";
import { Typography } from "@mui/material";
import PatientBadge from "../../shared/components/patient-badge";
import ProviderBadge from "../../shared/components/provider-badge";

function InstantPayment() {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const provider = JSON.parse(localStorage.getItem("provider") as string);

  return (
    <>
      <PatientBadge {...user} sx={{ marginBottom: "60px" }} />
      <ProviderBadge {...provider} sx={{ marginBottom: "45px" }} />
      <Typography fontSize="20px" fontWeight={700} sx={{ margin: "0 auto" }}>
        Choose Service
      </Typography>
    </>
  );
}

export default InstantPayment;
