import { Divider, Theme, Typography, useMediaQuery } from "@mui/material";

function Footer() {
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Divider />
      <footer
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
      </footer>
    </>
  );
}

export default Footer;
