import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import ProviderBadge from "../../shared/components/provider-badge";
import PatientBadge from "../../shared/components/patient-badge";
import BankCard from "../../shared/components/bank-card";
import InfoBadge from "../../shared/components/info-badge";

function Payment() {
  const { state } = useLocation();

  const patient = JSON.parse(localStorage.getItem("patient") as string);
  const provider = JSON.parse(localStorage.getItem("provider") as string);

  return (
    <>
      <PatientBadge {...patient} sx={{ marginBottom: "44px" }} />
      <ProviderBadge {...provider} sx={{ marginBottom: "44px" }} />
      <BankCard
        amount={`$${state?.sum ?? provider.rate}`}
        code="077"
        cardNumber="5555 1111 2222 3333 4444"
        inspiredDate="02/25"
        sx={{
          margin: "0 auto",
        }}
      />
      {state?.sum ? (
        <Typography
          fontSize={12}
          sx={{
            letterSpacing: 0,
            margin: "0 30px",
          }}
        >
          By accepting the payment you agree not to balance bill the patient.
          Please bill payer for any additional services.
        </Typography>
      ) : (
        <InfoBadge
          title="Please use this card for payment to provider."
          description="Ask the provider to bill additional services to your insurance."
          sx={{
            marginTop: "40px",
          }}
        />
      )}
    </>
  );
}

export default Payment;
