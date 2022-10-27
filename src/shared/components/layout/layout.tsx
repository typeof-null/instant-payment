import { ReactNode, useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Header from "./components/header";
import MobileFooter from "./components/mobile-footer";
import { setMediaQuery } from "../../utils/queries";

type Props = {
  children: ReactNode | ((isAuth: boolean) => ReactNode);
};

function Layout({ children }: Props) {
  const isMobileSize = useMediaQuery(setMediaQuery());
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const autorized = !!localStorage.getItem("auth");
    // check if in local storage exist user
    setTimeout(() => {
      setAuth(autorized);
    }, 0);
  }, []);

  const sx = {
    width: "416px",
    height: "702px",
    margin: "40px auto",
    background: "#fff",
    position: "relative",
    ...(isMobileSize && {
      width: "100%",
      margin: 0,
      height: "100vh",
    }),
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={sx}
    >
      <Header isAuth={auth} isMobileApp />
      <Box
        component="main"
        sx={{
          position: "relative",
          overflowY: "scroll",
          height: "100%",
          width: "100%",
          paddingBottom: "80px",
        }}
      >
        {typeof children === "function" ? children(auth) : children}
      </Box>
      <MobileFooter isAuth={auth} />
    </Box>
  );
}

export default Layout;
