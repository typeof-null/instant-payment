import React from "react";
import { Box, Typography } from "@mui/material";
import { SxType } from "../../types";

type Props = {
  title: string;
  description: string;
  sx?: SxType;
};
function InfoBadge({ title, description, sx }: Props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        padding: "10px",
        width: "100%",
        background: "#FAFAFA",
        borderRadius: "4px",
        ...sx,
      }}
    >
      <Typography fontSize="16px" fontWeight={700}>
        {title}
      </Typography>
      <Typography fontSize="14px">{description}</Typography>
    </Box>
  );
}

export default InfoBadge;
