import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { Provider, SxType } from "../../../../shared/types";

type Props = {
  list: Provider[];
  sx: SxType;
  onPickDoctor: (doctor: Provider) => void;
};
function FoundDoctorList({ list, sx, onPickDoctor }: Props) {
  return (
    <Box
      sx={{
        borderRadius: "4px",
        bgcolor: "background.paper",
        marginTop: "4px",
        width: "100%",
        maxHeight: 360,
        position: "relative",
        overflow: "auto",
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);",
        ...sx,
      }}
    >
      <List>
        {list.map(({ name, rate, distance, rateConditions }, index) => (
          <ListItem
            key={index}
            sx={{
              height: "78px",
              backgroundColor: index % 2 === 0 ? "#ffffff" : "#FAFAFA",
              cursor: "pointer",
            }}
            onClick={() => onPickDoctor(list[index])}
          >
            <Box display="flex" flexDirection="column" sx={{ width: "100%" }}>
              <Box display="flex" justifyContent="space-between">
                <Typography fontWeight={700} sx={{ fontSize: "18px" }}>
                  {name}
                </Typography>
                <Typography
                  fontWeight={700}
                  sx={{ fontSize: "18px", color: "#008042" }}
                >
                  {rate}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography sx={{ fontSize: "16px" }}>{distance}</Typography>
                {rateConditions && (
                  <Typography sx={{ fontSize: "16px", color: "#2C0777" }}>
                    {rateConditions}
                  </Typography>
                )}
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default FoundDoctorList;
