import { SyntheticEvent } from "react";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Checkbox,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { ServiceOption } from "../../../../shared/types";

type Props = {
  services: ServiceOption[];
  disabledButton?: boolean;
  onClick: () => void;
  onChange: (event: SyntheticEvent, newValue: ServiceOption[]) => void;
};

function ChooseService({
  services,
  disabledButton = true,
  onClick,
  onChange,
}: Props) {
  return (
    <>
      <Typography
        fontSize="20px"
        fontWeight={700}
        sx={{ margin: "0 auto 20px" }}
      >
        Choose Service
      </Typography>
      <Autocomplete
        multiple
        options={services}
        disableCloseOnSelect
        groupBy={(option) => option.category}
        getOptionLabel={(option) => option.service}
        style={{ width: "100%" }}
        onChange={onChange}
        renderOption={(props, option, { selected }) => (
          <li
            {...props}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              icon={<CheckBoxOutlineBlank fontSize="small" />}
              checkedIcon={<CheckBox fontSize="small" />}
              style={{ marginRight: 8, color: "#2C0777" }}
              checked={selected}
            />
            <Typography>{option.service}</Typography>
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} placeholder="Choose Service ..." />
        )}
        renderGroup={(params) => (
          <li {...params}>
            <Typography
              fontSize={16}
              fontWeight={600}
              style={{
                position: "sticky",
                top: "-8px",
                padding: "8px 10px",
                color: "#515151",
                margin: 0,
                textAlign: "center",
                backgroundColor: "#FAFAFA",
              }}
            >
              {params.group}
            </Typography>
            <List
              style={{
                padding: 0,
              }}
            >
              {params.children}
            </List>
          </li>
        )}
      />

      <Button
        sx={{
          color: "#2C0777",
          background: "#EAEAEA",
          borderRadius: "16px",
          padding: "10px 16px",
          margin: "40px auto 0",
        }}
        disabled={disabledButton}
        onClick={onClick}
      >
        Done
      </Button>
    </>
  );
}

export default ChooseService;
