import { Box, Typography } from "@mui/material";
import { SxType } from "../../types";

type Props = {
  title: string;
  description: string;
  sx?: SxType;
};
function InfoBadge({ title, description, sx }: Props) {
  const textSx = {
    letterSpacing: 0,
  };
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
        textAlign: "center",
        ...sx,
      }}
    >
      <Typography fontSize="1rem" fontWeight={700} sx={textSx}>
        {title}
      </Typography>
      <Typography fontSize="14px" sx={textSx}>
        {description}
      </Typography>
    </Box>
  );
}

export default InfoBadge;
