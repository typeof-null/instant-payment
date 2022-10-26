import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PatientBadge from "../../../../shared/components/patient-badge";
import { Provider } from "../../../../shared/types";
import FindDoctorWidget from "../find-doctor-widget";

function PatientContent() {
  const navigate = useNavigate();
  const patient = JSON.parse(localStorage.getItem("patient") as string);

  const handlePickDoctor = (doctor: Provider) => {
    if (localStorage.getItem("provider")) {
      localStorage.removeItem("provider");
    }
    localStorage.setItem("provider", JSON.stringify(doctor));
    navigate("/payment", { state: { title: "Payment" } });
  };

  return (
    <>
      {patient && <PatientBadge {...patient} sx={{ marginBottom: "54px" }} />}
      <Typography
        fontSize={18}
        fontWeight={700}
        color="text.primary"
        textAlign="center"
        sx={{ marginBottom: "20px" }}
      >
        Find Doctor
      </Typography>
      <FindDoctorWidget
        onPickDoctor={handlePickDoctor}
        sx={{ padding: "0 16px" }}
      />
    </>
  );
}

export default PatientContent;
