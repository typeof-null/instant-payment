import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dayjs } from "dayjs";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function FindPatientWidget() {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [birthDay, setBirthDay] = useState<Dayjs | null>(null);
  const [lastName, setLastName] = useState("");

  const handleChangeMemberID = (e: ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);
  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);
  const handleChangeBirthDay = (newValue: Dayjs | null) =>
    setBirthDay(newValue);

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    setLoading(true);

    fetch("mock-data/patients.json")
      .then((res) => res.json())
      .then(({ data }) => {
        localStorage.setItem(
          "patient",
          JSON.stringify({
            ...data[0],
          })
        );
      })
      .finally(() => {
        setLoading(false);
        navigation("/visits", { state: { title: "Visits" } });
      });
  };

  const disabled = !id.length && (!birthDay || !lastName.length);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      component="form"
      noValidate
      autoComplete="off"
      sx={{ padding: "0 20px", width: "100%" }}
    >
      <TextField
        label="Member ID"
        variant="outlined"
        sx={{ marginBottom: "20px", width: "100%" }}
        size="small"
        InputLabelProps={{
          style: {
            color: "#A0A0A0",
          },
        }}
        onChange={handleChangeMemberID}
      />
      <Typography
        fontSize="1rem"
        fontWeight={700}
        color="text.primary"
        textAlign="center"
        sx={{ marginBottom: "22px" }}
      >
        - or -
      </Typography>
      <TextField
        label="Enter patient’s last name"
        variant="outlined"
        size="small"
        sx={{ marginBottom: "12px", width: "100%" }}
        onChange={handleChangeLastName}
        InputLabelProps={{
          style: {
            color: "#A0A0A0",
          },
        }}
      />
      <DatePicker
        label="Enter patient’s last name"
        value={birthDay}
        disableFuture
        onChange={handleChangeBirthDay}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: "100%", color: "#A0A0A0" }}
            size="small"
            InputLabelProps={{
              style: {
                color: "#A0A0A0",
              },
            }}
          />
        )}
      />

      <Button
        sx={{
          color: "#2C0777",
          background: "#EAEAEA",
          borderRadius: "16px",
          padding: "10px 16px",
          margin: "40px auto 0",
          fontSize: "14px",
          fontWeight: "500",
        }}
        onClick={handleSubmit}
        startIcon={
          loading ? (
            <CircularProgress size={20} sx={{ color: "#2C0777" }} />
          ) : (
            <SearchIcon />
          )
        }
        disabled={disabled}
      >
        Search
      </Button>
    </Box>
  );
}

export default FindPatientWidget;
