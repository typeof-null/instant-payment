import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import profile from "../../../../icons/profile.svg";
import infoSquare from "../../../../icons/info-square.svg";

export default function Header() {
  const navigate = useNavigate();
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const isAuth = !!localStorage.getItem("user");

    // will check if in local storage exist user
    setTimeout(() => {
      setAuth(isAuth);
    }, 0);
  }, []);

  const handleUnAuth = () => {
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate(0);
    }, 1000);
  };
  const getNavSrc = (nav: string) => (nav === "Profile" ? profile : infoSquare);

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
          {NAVS.map((nav) => (
            <ListItem key={nav} disablePadding>
              <ListItemButton sx={{ borderRadius: "16px" }}>
                <img src={getNavSrc(nav)} alt={nav} />
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
