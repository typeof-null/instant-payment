import React from "react";
import { Box, Typography } from "@mui/material";
import { Provider, SxType } from "../../types";

type Props = Provider & {
  sx?: SxType;
};

function ProviderBadge({ name, speciality, address, sx }: Props) {
  return (
    <>
      <Typography
        variant="h6"
        fontWeight={600}
        color="text.primary"
        sx={{ marginBottom: "10px", fontSize: "1rem" }}
      >
        Provider
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          padding: "10px 20px",
          width: "100%",
          background: "#FAFAFA",
          borderRadius: "4px",
          ...sx,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ marginBottom: "10px" }}
        >
          <Typography fontWeight={700} sx={{ fontSize: "18px" }}>
            {name}
          </Typography>
          <Typography fontWeight={700} sx={{ fontSize: "18px" }}>
            {speciality}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "16px" }}>{address}</Typography>
      </Box>
    </>
  );
}

export default ProviderBadge;
