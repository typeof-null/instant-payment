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
        fontSize="18px"
        fontWeight={700}
        textAlign="center"
        sx={{ marginBottom: "10px" }}
      >
        Choose Service
      </Typography>
      <Autocomplete
        multiple
        disablePortal
        options={services}
        disableCloseOnSelect
        groupBy={(option) => option.category}
        getOptionLabel={(option) => option.service}
        size="small"
        style={{ width: "100%", display: "inline-table", padding: "0 20px" }}
        sx={{
          height: "46px",
        }}
        componentsProps={{
          paper: {
            style: { marginBottom: "80px", height: "256px" },
          },
        }}
        // ListboxProps={{ style: { marginBottom: "80px" } }}
        onChange={onChange}
        renderOption={(props, option, { selected }) => (
          <li
            {...props}
            style={{
              display: "flex",
              alignItems: "center",
              height: "44px",
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
          fontSize: "14px",
          display: "block",
          color: "#2C0777",
          background: "#EAEAEA",
          borderRadius: "16px",
          // padding: "10px 16px",
          width: "95px",
          height: "40px",
          margin: "12px auto 0",
          fontWeight: 600,
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
