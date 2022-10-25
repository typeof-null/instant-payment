import { ROLES } from "../../shared/constants";
import PatientContent from "./components/patient-content";
import ProviderContent from "./components/provider-content";

function Main() {
  const auth = JSON.parse(localStorage.getItem("auth") as string);

  const patientRole = auth?.role === ROLES.PATIENT;

  if (!auth?.role) {
    return <></>;
  }
  return <>{patientRole ? <PatientContent /> : <ProviderContent />}</>;
}

export default Main;
