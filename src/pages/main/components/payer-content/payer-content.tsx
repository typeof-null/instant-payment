import { useState } from "react";
import { Typography } from "@mui/material";
import PatientBadge from "../../../../shared/components/patient-badge";
import { ROLES } from "../../../../shared/constants";
import FindPatientWidget from "../find-patient-widget";
import FindProviderWidget from "../find-provider-widget";

function PayerContent() {
  const patient = JSON.parse(localStorage.getItem("patient") as string);
  const [step, setStep] = useState(ROLES.PATIENT);

  const handleFoundPatient = () => setStep(ROLES.PROVIDER);

  let title = "Patient";
  let renderStep = <FindPatientWidget onFound={handleFoundPatient} />;
  if (step === ROLES.PROVIDER) {
    title = "Provider";
    renderStep = <FindProviderWidget />;
  }
  return (
    <>
      {patient && step === ROLES.PROVIDER && (
        <PatientBadge {...patient} sx={{ marginBottom: "54px" }} />
      )}
      <Typography
        fontSize={18}
        fontWeight={700}
        color="text.primary"
        textAlign="center"
        sx={{
          marginBottom: "28px",
          marginTop: step === ROLES.PATIENT ? "119px" : 0,
        }}
      >
        {`Find ${title}`}
      </Typography>
      {renderStep}
    </>
  );
}

export default PayerContent;
