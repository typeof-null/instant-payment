import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  FormControl,
  TextField,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import SearchIcon from "@mui/icons-material/Search";
import dayjs, { Dayjs } from "dayjs";
import { Provider, Speciality, SxType } from "../../../../shared/types";
import FoundDoctorList from "../found-doctor-list";
import SearchLocationInput from "./components/search-location-input";

type Props = {
  sx?: SxType;
  onPickDoctor: (doctor: Provider) => void;
};

function FindDoctorWidget({ sx, onPickDoctor }: Props) {
  const [loading, setLoading] = useState(false);
  const [foundDoctors, setFoundDoctors] = useState<Provider[]>([]);
  const [specialities, setSpecialities] = useState<Speciality[]>();
  const [speciality, setSpeciality] = useState<Speciality>("");
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch("/mock-data/specialities.json")
      .then((res) => res.json())
      .then(({ data }) => setSpecialities(data));
  }, []);

  const handleChangeDate = (newValue: Dayjs | null) => setDate(newValue);
  const handlePickLocation = (location: string) => setLocation(location);
  const handlePickSpeciality = (e: SyntheticEvent, value: any) =>
    setSpeciality(value as Speciality);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      fetch("/mock-data/providers.json")
        .then((res) => res.json())
        .then(({ data }) =>
          setFoundDoctors(
            data.map((doctor: Provider) => ({
              ...doctor,
              speciality,
              address: location,
            }))
          )
        )
        .finally(() => setLoading(false));
    }, 1000);
  };

  const disabled = !date || !location.length || !speciality.length;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      component="form"
      autoComplete="off"
      width="100%"
      sx={{
        ...sx,
      }}
    >
      <Box display="flex" sx={{ marginBottom: "10px" }}>
        <SearchLocationInput
          value={location}
          sx={{ marginRight: "10px" }}
          disabled={!!foundDoctors.length}
          onClick={handlePickLocation}
        />
        <DesktopDatePicker
          aria-label="date"
          inputFormat="MM/DD/YYYY"
          value={date}
          disabled={!!foundDoctors.length}
          onChange={handleChangeDate}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </Box>
      <FormControl fullWidth>
        <Autocomplete
          id="specialities"
          options={specialities ?? []}
          disablePortal
          onChange={handlePickSpeciality}
          noOptionsText="No found"
          disabled={!!foundDoctors.length}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Find provider by speciality ..."
            />
          )}
        />
      </FormControl>

      {foundDoctors.length ? (
        <FoundDoctorList
          list={foundDoctors}
          sx={{ marginTop: "10px" }}
          onPickDoctor={onPickDoctor}
        />
      ) : (
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
          startIcon={
            loading ? (
              <CircularProgress size={20} sx={{ color: "#2C0777" }} />
            ) : (
              <SearchIcon />
            )
          }
          disabled={disabled}
          onClick={handleSubmit}
        >
          Search
        </Button>
      )}
    </Box>
  );
}

export default FindDoctorWidget;
