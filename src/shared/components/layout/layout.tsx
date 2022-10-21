import { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Box } from "@mui/material";


type Props = {
  children: ReactNode;
};
function Layout({ children }: Props) {
  const isAuth = !!localStorage.getItem("user");

  const sx = {
    ...(isAuth && {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      width: "60%",
      margin: "0 auto",
      padding: "20px",
    }),
  };

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          minHeight: "calc(85vh)",
          ...sx
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
