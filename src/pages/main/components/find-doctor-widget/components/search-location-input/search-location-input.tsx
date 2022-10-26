import { ChangeEvent, useState } from "react";
import {
  Box,
  CircularProgress,
  debounce,
  FormControl,
  InputAdornment,
  List,
  ListItemButton,
  OutlinedInput,
  Popper,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SxType } from "../../../../../../shared/types";

type Props = {
  value: string;
  sx: SxType;
  disabled?: boolean;
  onClick: (location: string) => void;
};

function SearchLocationInput({ value, disabled = false, sx, onClick }: Props) {
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [attribution, setAttribution] = useState<string[]>([]);

  const handleClick = (location: string) => {
    onClick(location);
    setAttribution([]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onClick(e.target.value);
    setLoading(true);

    debounce(() => {
      fetch("/mock-data/locations.json")
        .then((res) => res.json())
        .then(({ attribution }) => {
          if (e.target.value) {
            const filteredAttribution = attribution.filter(
              (attribute: string) =>
                attribute
                  .trim()
                  .toLocaleLowerCase()
                  .includes(e.target.value.trim().toLocaleLowerCase())
            );
            setAttribution(filteredAttribution);
          } else {
            setAttribution([]);
          }
        })
        .finally(() => setLoading(false));
    }, 2000)();
  };

  const open = !!anchorEl && !!attribution.length;
  const id = open ? "location-popper" : undefined;

  return (
    <>
      <FormControl
        ref={setAnchorEl}
        variant="outlined"
        aria-label="location"
        fullWidth
        sx={sx}
        disabled={disabled}
      >
        <OutlinedInput
          size="small"
          id="outlined-adornment-password"
          type="text"
          placeholder="Pleasantville, ST"
          value={value}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              {loading ? <CircularProgress size={20} /> : <LocationOnIcon />}
            </InputAdornment>
          }
        />
      </FormControl>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{
            borderRadius: "4px",
            bgcolor: "background.paper",
            marginTop: "4px",
            width: anchorEl?.offsetWidth,
            maxHeight: 360,
            position: "relative",
            overflow: "auto",
            boxShadow:
              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);",
          }}
        >
          <List>
            {attribution.map((attribute) => (
              <ListItemButton
                key={attribute}
                onClick={() => handleClick(attribute)}
              >
                <Typography noWrap>{attribute}</Typography>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Popper>
    </>
  );
}

export default SearchLocationInput;
