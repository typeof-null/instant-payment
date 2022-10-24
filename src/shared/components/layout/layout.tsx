import { ReactNode, useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/header";
import MobileFooter from "./components/mobile-footer";

type Props = {
  children: ReactNode | ((isAuth: boolean) => ReactNode);
};

function Layout({ children }: Props) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const autorized = !!localStorage.getItem("user");
    // check if in local storage exist user
    setTimeout(() => {
      setAuth(autorized);
    }, 0);
  }, []);

  // was set for desktop
  const sx = {
    // ...(isAuth && {
    //   display: "flex",
    //   alignItems: "flex-start",
    //   flexDirection: "column",
    //   width: "60%",
    //   margin: "0 auto",
    //   padding: "20px",
    // }),
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        width: "416px",
        height: "702px",
        margin: "40px auto",
        background: "#fff",
        position: "relative",
      }}
    >
      <Header isAuth={auth} isMobileApp />
      <Box
        component="main"
        sx={{
          // minHeight: "calc(85vh)", for desktop
          position: "relative",
          overflowY: "scroll",
          // height: "700px",
          height: "100%",
          width: "100%",
          paddingBottom: "80px",
          ...sx,
        }}
      >
        {typeof children === "function" ? children(auth) : children}
      </Box>
      <MobileFooter isAuth={auth} />
    </Box>
  );
}

export default Layout;
