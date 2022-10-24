import {
  Box,
  Divider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { setMediaQuery } from "../../../../utils/queries";
import Navigation from "../navigation";

type Props = {};

function Footer({}: Props) {
  const isSm = useMediaQuery(setMediaQuery("sm"));

  return (
    <>
      <Divider />
      <Box
        component="footer"
        style={{
          padding: isSm ? "15px" : "15px 30px",
          textAlign: "center",
          height: "80px",
        }}
      >
        {`Copyright © ${new Date().getFullYear()} CoPatient`}
        <Typography variant="caption">
          {process.env.REACT_APP_VERSION}
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
