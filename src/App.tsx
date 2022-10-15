import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import Layout from "./shared/components/layout";
import Main from "./pages/main";

function App() {
  const theme = useTheme();
  const isAuth = !!localStorage.getItem("user");

  return (
    <Layout>
      <Routes>
        {isAuth ? (
          <>
            <Route
              path="/"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>SEARCH </p>
                </main>
              }
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Layout>
  );
}
export default App;
