import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Layout from "./shared/components/layout";
import Login from "./pages/login";
import Main from "./pages/main";
import Payment from "./pages/payment";
import Visits from "./pages/visits";
import InstantPayment from "./pages/instant-payment";

function App() {
  const isAuth = !!localStorage.getItem("user");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Layout>
        <Routes>
          {isAuth ? (
            <>
              <Route path="/" element={<Main />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/visits" element={<Visits />} />
              <Route path="/instant-payment" element={<InstantPayment />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </Layout>
    </LocalizationProvider>
  );
}
export default App;
