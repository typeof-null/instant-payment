import React from "react";
import { SxProps, Theme, Box, Typography } from "@mui/material";
import { Patient } from "../../types";

type Props = Patient & {
  sx?: SxProps<Theme>;
};

function PatientBadge({ sx, name, date, memberId }: Props) {
  const renderText = (text: string): JSX.Element => (
    <Typography fontWeight={700} sx={{ fontSize: "1rem" }}>
      {text}
    </Typography>
  );

  return (
    <Box component="section">
      <Typography
        fontSize="12px"

        fontWeight={600}
        color="text.primary"
        sx={{ margin: "10px 10px 4px" }}
      >
        Patient
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          padding: "10px 20px",
          width: "100%",
          background: "#FAFAFA",
          borderRadius: "4px",
          ...sx,
        }}
      >
        {renderText(name)}
        {renderText(`DOB ${date}`)}
        {renderText(memberId)}
      </Box>
    </Box>
  );
}

export default PatientBadge;
