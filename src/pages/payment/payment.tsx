import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ProviderBadge from "../../shared/components/provider-badge";
import PatientBadge from "../../shared/components/patient-badge";
import BankCard from "../../shared/components/bank-card";
import InfoBadge from "../../shared/components/info-badge";

function Payment() {
  const { state } = useLocation();

  const user = JSON.parse(localStorage.getItem("user") as string);
  const provider = JSON.parse(localStorage.getItem("provider") as string);

  return (
    <>
      <PatientBadge {...user} sx={{ marginBottom: "60px" }} />
      <ProviderBadge {...provider} sx={{ marginBottom: "45px" }} />
      <BankCard
        amount="$124.99"
        code="077"
        cardNumber="5555 1111 2222 3333 4444"
        inspiredDate="02/25"
        sx={{
          margin: "0 auto",
        }}
      />
      {state?.isProceed ? (
        <Typography>
          By accepting the payment you agree not to balance bill the patient.
          Please bill payer for any additional services.
        </Typography>
      ) : (
        <InfoBadge
          title="Please use this card for payment to provider."
          description="Ask the provider to bill additional services to your insurance."
          sx={{
            margin: "45px auto 0",
          }}
        />
      )}
    </>
  );
}

export default Payment;
