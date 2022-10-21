import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientBadge from "../../shared/components/patient-badge";
import ProviderBadge from "../../shared/components/provider-badge";
import { ServiceOption } from "../../shared/types";

import ChooseService from "./components/choose-service";
import Payment from "./components/payment";
import { STEPS } from "./constants";
import { Step } from "./types";

function InstantPayment() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") as string);
  const provider = JSON.parse(localStorage.getItem("provider") as string);

  const [step, setStep] = useState<Step>(STEPS.CHOOSE_SERVICE);
  const [services, setServices] = useState<ServiceOption[]>([]);
  const [chosenServices, setChosenServices] = useState<ServiceOption[]>([]);

  useEffect(() => {
    fetch("/mock-data/services.json")
      .then((res) => res.json())
      .then(({ data }) => setServices(data));
  }, []);

  const handleChange = (
    event: SyntheticEvent,
    chosenServices: ServiceOption[]
  ) => setChosenServices(chosenServices);

  const handleViewPaymentStep = () => setStep(STEPS.PAYMENT);
  const handleViewChoosenServiceStep = () => setStep(STEPS.CHOOSE_SERVICE);
  const handeRedirectPayment = () =>
    navigate("/payment", { state: { isProceed: true } });

  const renderStep = () => {
    let render = (
      <ChooseService
        services={services}
        onChange={handleChange}
        disabledButton={!chosenServices.length}
        onClick={handleViewPaymentStep}
      />
    );

    if (step === STEPS.PAYMENT) {
      render = (
        <Payment
          services={chosenServices}
          onRefresh={handleViewChoosenServiceStep}
          onClick={handeRedirectPayment}
        />
      );
    }

    return render;
  };

  return (
    <>
      <PatientBadge {...user} sx={{ marginBottom: "60px" }} />
      <ProviderBadge {...provider} sx={{ marginBottom: "45px" }} />
      {!!services.length && renderStep()}
    </>
  );
}

export default InstantPayment;
