import { SyntheticEvent, useEffect, useState } from "react";
import { Autocomplete, FormControl, TextField } from "@mui/material";
import { Speciality, SxType } from "../../types";

type Props = {
  disabled?: boolean;
  sx?: SxType;
  onChange: (e: SyntheticEvent, value: any) => void;
};
function SpecialityInput({ disabled = false, sx, onChange }: Props) {
  const [specialities, setSpecialities] = useState<Speciality[]>([]);

  useEffect(() => {
    fetch("/mock-data/specialities.json")
      .then((res) => res.json())
      .then(({ data }) => setSpecialities(data));
  }, []);

  return (
    <FormControl fullWidth sx={sx}>
      <Autocomplete
        size="small"
        id="specialities"
        options={specialities}
        disablePortal
        onChange={onChange}
        noOptionsText="No found"
        disabled={disabled}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Find provider by speciality ..."
          />
        )}
      />
    </FormControl>
  );
}

export default SpecialityInput;
