import React, { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Box } from "@mui/material";

type Props = {
  children: ReactNode;
};
function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Box
        component="main"
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
        style={{
          minHeight: "calc(85vh)",
          width: "60%",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
