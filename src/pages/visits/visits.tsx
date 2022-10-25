import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Visit } from "../../shared/types";
import ProviderBadge from "../../shared/components/provider-badge";
import PatientBadge from "../../shared/components/patient-badge";
import RecentVisits from "./components/recent-visits";

function Visits() {
  const navigate = useNavigate();
  const patient = JSON.parse(localStorage.getItem("patient") as string);
  const provider = JSON.parse(localStorage.getItem("provider") as string);
  const [visits, setVisits] = useState<Visit[]>([]);

  useEffect(() => {
    fetch("/mock-data/visits.json")
      .then((res) => res.json())
      .then(({ data }) => setVisits(data));
  }, []);

  const handleRedirectInstantPayment = () => navigate("/instant-payment", {state: {title: "Instant Payment"}});

  return (
    <>
      <PatientBadge {...patient} sx={{ marginBottom: "60px" }} />
      <ProviderBadge {...provider} sx={{ marginBottom: "40px" }} />
      {!!visits.length && (
        <>
          <RecentVisits visits={visits} />
          <Button
            sx={{
              display: "block",
              color: "#2C0777",
              background: "#EAEAEA",
              borderRadius: "16px",
              margin: "44px auto 0",
              fontWeight: 600,
              fontSize: "14px",
              width: "95px",
              padding: "0",
              height: "40px",
            }}
            onClick={handleRedirectInstantPayment}
          >
            New Visit
          </Button>
        </>
      )}
    </>
  );
}

export default Visits;
