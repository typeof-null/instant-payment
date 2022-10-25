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
        fontSize="12px"
        fontWeight={600}
        color="text.primary"
        sx={{ margin: "10px 10px 4px" }}
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
          <Typography fontWeight={700} sx={{ fontSize: "1rem", width: "50%" }}>
            {name}
          </Typography>
          <Typography fontWeight={700} noWrap sx={{ fontSize: "1rem" }}>
            {speciality || "Primary Care"}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "14px" }}>
          {address || "Pleasantville, NY"}
        </Typography>
      </Box>
    </>
  );
}

export default ProviderBadge;
