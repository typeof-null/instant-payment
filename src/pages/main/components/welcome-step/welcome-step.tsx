import { Button, Typography, useTheme } from "@mui/material";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import { Role } from "../../types";

type Props = {
  onNextStep: (role: Role) => void;
};

function WelcomeStep({ onNextStep }: Props) {
  const { secondary } = useTheme().palette;

  const sxButton = {
    marginBottom: "32px",
    width: "250px",
    color: secondary.main,
    fontSize: "1.2rem",
    borderRadius: "16px",
    fontWeight: "700",
  };
  return (
    <>
      <Typography
        variant="h2"
        fontWeight="700"
        color="secondary"
        sx={{ marginTop: "100px", marginBottom: "64px" }}
      >
        Welcome to Instant Payment !
      </Typography>
      <Button
        variant="contained"
        size="large"
        disableElevation
        startIcon={<AccessibleForwardIcon />}
        sx={sxButton}
        onClick={() => onNextStep("patient")}
      >
        I’m a patient
      </Button>
      <Button
        disableElevation
        variant="contained"
        size="large"
        startIcon={<KitesurfingIcon />}
        sx={sxButton}
        onClick={() => onNextStep("provider")}
      >
        I’m a provider
      </Button>
      <Button
        onClick={() => onNextStep("Payer")}
        sx={{ color: "#008042", textDecoration: "underline" }}
      >
        Payer Login
      </Button>
    </>
  );
}

export default WelcomeStep;
