import { useState } from "react";
import { Box } from "@mui/material";
import WelcomeStep from "./components/welcome-step";
import LoginStep from "./components/login-step";
import { STEPS } from "./contstants";
import { Role, Step } from "./types";

function Main() {
  const [step, setStep] = useState<Step>(STEPS.WELCOME);
  const [role, setRole] = useState<Role | undefined>();

  const handleNextStep = (role: Role) => {
    setStep(STEPS.LOGIN);
    setRole(role);
  };
  const handlePrevStep = () => {
    setStep(STEPS.WELCOME);
    setRole(undefined);
  };

  const isAuth = !!localStorage.getItem("user");
  const renderStep =
    step === STEPS.WELCOME ? (
      <WelcomeStep onNextStep={handleNextStep} />
    ) : (
      <LoginStep role={role} onPrevStep={handlePrevStep} />
    );

  const children = isAuth ? <></> : renderStep;
  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ textAlign: "center" }}
    >
      {children}
    </Box>
  );
}

export default Main;
