import React, { MouseEvent, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  List,
  ListItem,
  ListItemButton,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { NAVS } from "./constants";
import { getNavIconSrc } from "./utils";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const isAuth = !!localStorage.getItem("user");
    // check if in local storage exist user
    setTimeout(() => {
      setAuth(isAuth);
    }, 0);
  }, []);

  const handleUnAuth = () => {
    // remove all from ls and reload page fro view login page
    localStorage.removeItem("user");
    localStorage.removeItem("provider");
    setTimeout(() => {
      navigate(0);
    }, 1000);
  };

  const handleRedirect = (e: MouseEvent<HTMLDivElement>) =>
    navigate(`/${(e.target as HTMLDivElement).textContent?.toLowerCase()}`);

  const isPaymentPage = pathname.includes("payment");
  const getNavList = (): string[] => {
    let navList = NAVS;
    if (auth) {
      navList = ["Alerts", ...navList.filter((nav) => nav !== "Profile")];
    }
    if (isPaymentPage) {
      navList = ["Visits", ...navList];
    }
    return navList;
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      component="header"
      color="primary"
      sx={{ padding: isSm ? "0 15px" : "0 30px" }}
    >
      <Toolbar component="nav" disableGutters>
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          {getNavList().map((nav) => (
            <ListItem key={nav} disablePadding>
              <ListItemButton
                sx={{ borderRadius: "16px" }}
                onClick={handleRedirect}
              >
                <img src={getNavIconSrc(nav)} alt={nav} />
                <Typography fontWeight="500" sx={{ marginLeft: "8px" }}>
                  {nav}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {auth && (
          <IconButton aria-label="user" onClick={handleUnAuth} color="inherit">
            <AccountCircle fontSize="large" />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
