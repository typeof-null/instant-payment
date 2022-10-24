import { useNavigate } from "react-router-dom";
import { AccessibleForward, Kitesurfing } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Role } from "../../shared/types";
import { ROLES } from "../../shared/constants";

function Welcome() {
  const navigate = useNavigate();

  const handleRedirectLogin = (role: Role) =>
    navigate("/login", { state: { role } });

  const sxButton = {
    marginBottom: "32px",
    width: "279px",
    color: "text.secondary",
    fontSize: "1rem",
    borderRadius: "16px",
    fontWeight: "700",
  };

  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ textAlign: "center" }}
    >
      <Typography
        fontSize={30}
        fontWeight={700}
        color="secondary"
        sx={{ margin: "78px 0 62px" }}
      >
        Welcome to Instant Payment !
      </Typography>
      <Button
        variant="contained"
        size="large"
        disableElevation
        startIcon={<AccessibleForward />}
        sx={sxButton}
        onClick={() => handleRedirectLogin(ROLES.PATIENT)}
      >
        I’m a patient
      </Button>
      <Button
        disableElevation
        variant="contained"
        size="large"
        startIcon={<Kitesurfing />}
        sx={sxButton}
        onClick={() => handleRedirectLogin(ROLES.PROVIDER)}
      >
        I’m a provider
      </Button>
      <Button
        onClick={() => handleRedirectLogin(ROLES.PAYER)}
        sx={{ color: "#008042", textDecoration: "underline", padding: 0 }}
      >
        Payer Login
      </Button>
    </Box>
  );
}

export default Welcome;
