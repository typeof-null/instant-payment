import { ROLES } from "../../shared/constants";
import PatientContent from "./components/patient-content";
import PayerContent from "./components/payer-content";
import ProviderContent from "./components/provider-content";

function Main() {
  const auth = JSON.parse(localStorage.getItem("auth") as string);

  const render = () => {
    let component = <></>;
    if (auth?.role === ROLES.PATIENT) {
      component = <PatientContent />;
    }
    if (auth?.role === ROLES.PROVIDER) {
      component = <ProviderContent />;
    }
    if (auth?.role === ROLES.PAYER) {
      component = <PayerContent />;
    }
    return component;
  };

  return render();
}

export default Main;
