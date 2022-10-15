import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import Layout from "./shared/components/layout";
import Login from "./pages/login";
import Main from "./pages/main";

function App() {
  const theme = useTheme();
  const isAuth = !!localStorage.getItem("user");

  return (
    <Layout>
      <Routes>
        {isAuth ? (
          <>
            <Route path="/" element={<Main />} />

          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Layout>
  );
}
export default App;
