import { useState } from "react";
import { Box } from "@mui/material";
import { Role } from "../../shared/types";
import WelcomeStep from "./components/welcome-step";
import AuthStep from "./components/auth-step";
import { STEPS } from "./contstants";
import { Step } from "./types";

function Login() {
  const [step, setStep] = useState<Step>(STEPS.WELCOME);
  const [role, setRole] = useState<Role | undefined>();

  const handleNextStep = (role: Role) => {
    setStep(STEPS.AUTH);
    setRole(role);
  };
  const handlePrevStep = () => {
    setStep(STEPS.WELCOME);
    setRole(undefined);
  };

  const renderStep =
    step === STEPS.WELCOME ? (
      <WelcomeStep onNextStep={handleNextStep} />
    ) : (
      <AuthStep role={role} onPrevStep={handlePrevStep} />
    );

  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ textAlign: "center" }}
    >
      {renderStep}
    </Box>
  );
}

export default Login;
