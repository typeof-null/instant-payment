import React from "react";
import { SxProps, Theme, Box, Typography } from "@mui/material";
import { Patient } from "../../types";

type Props = Patient & {
  sx?: SxProps<Theme>;
};

function PatientBadge({ sx, name, date, memberId }: Props) {
  const renderText = (text: string): JSX.Element => (
    <Typography fontWeight={700} sx={{ fontSize: "18px" }}>
      {text}
    </Typography>
  );

  return (
    <>
      <Typography
        variant="h6"
        fontWeight={600}
        color="text.primary"
        sx={{ marginBottom: "10px", fontSize: "1rem" }}
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
    </>
  );
}

export default PatientBadge;
