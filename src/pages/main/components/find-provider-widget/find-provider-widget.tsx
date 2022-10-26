import { ChangeEvent, MouseEvent, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Speciality } from "../../../../shared/types";
import SpecialityInput from "../../../../shared/components/specialities-input";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function FindProviderWidget() {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(""); // provider name, npi, tax ID
  const [speciality, setSpeciality] = useState<Speciality>("");
  const [location, setLocation] = useState("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleChangeSpeciality = (e: SyntheticEvent, value: any) =>
    setSpeciality(value as Speciality);
  const handleChangeLocation = (e: ChangeEvent<HTMLInputElement>) =>
    setLocation(e.target.value);

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    setLoading(true);

    fetch("mock-data/providers.json")
      .then((res) => res.json())
      .then(({ data }) => {
        localStorage.setItem(
          "provider",
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

  const disabled = !name.length && (!speciality.length || !location.length);

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
        label="Provider Name, NPI or Tax ID "
        variant="outlined"
        sx={{ marginBottom: "20px", width: "100%" }}
        size="small"
        InputLabelProps={{
          style: {
            color: "#A0A0A0",
          },
        }}
        onChange={handleChangeName}
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

      <SpecialityInput
        onChange={handleChangeSpeciality}
        sx={{ marginBottom: "12px" }}
      />

      <FormControl variant="outlined" aria-label="location" fullWidth>
        <OutlinedInput
          size="small"
          type="text"
          placeholder="City, state, or zip code"
          value={location}
          onChange={handleChangeLocation}
          endAdornment={
            <InputAdornment position="end">
              <LocationOnIcon />
            </InputAdornment>
          }
        />
      </FormControl>

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

export default FindProviderWidget;
