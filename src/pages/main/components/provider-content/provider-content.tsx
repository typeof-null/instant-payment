import { Typography } from "@mui/material";
import ProviderBadge from "../../../../shared/components/provider-badge";
import FindPatientWidget from "../find-patient-widget";

function ProviderContent() {
  const provider = JSON.parse(localStorage.getItem("provider") as string);

  return (
    <>
      {provider && (
        <ProviderBadge {...provider} sx={{ marginBottom: "35px" }} />
      )}
      <Typography
        fontSize={18}
        fontWeight={700}
        color="text.primary"
        textAlign="center"
        sx={{ marginBottom: "28px", marginTop: !!provider ? 0 : "119px" }}
      >
        Find Patient
      </Typography>
      <FindPatientWidget />
    </>
  );
}

export default ProviderContent;
