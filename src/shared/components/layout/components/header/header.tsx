import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import { Typography, useMediaQuery } from "@mui/material";
import { setMediaQuery } from "../../../../utils/queries";
import Navigation from "../navigation";
import { REDIRECT } from "../../../../constants";

type Props = {
  isAuth: boolean;
  isMobileApp?: boolean;
};

export default function Header({ isAuth, isMobileApp = false }: Props) {
  const navigate = useNavigate();
  const { state, pathname } = useLocation();
  const isSm = useMediaQuery(setMediaQuery("sm"));

  const handleRedirectBack = () => navigate(REDIRECT.BACK);
  const handleUnAuth = () => {
    // remove all from ls and reload page fro view login page
    localStorage.removeItem("auth");
    localStorage.removeItem("patient");
    localStorage.removeItem("provider");
    setTimeout(() => {
      navigate("/");
      navigate(0);
    }, 1000);
  };

  const isMain = pathname === "/" && isAuth;
  const isWelcome = pathname === "/";

  const appSx = {
    padding: "0 16px",
    height: "52px",
    ...(!isMobileApp && {
      padding: isSm ? "0 15px" : "0 30px",
    }),
  };
  const toolBarSx = {
    ...(isMobileApp && {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    }),
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      component="header"
      color="primary"
      sx={appSx}
    >
      <Toolbar
        component="nav"
        variant={isMobileApp ? "dense" : "regular"}
        disableGutters
        sx={toolBarSx}
      >
        {isMobileApp ? (
          <>
            {!isWelcome && !isMain && (
              <IconButton
                size="small"
                sx={{ padding: 0 }}
                onClick={handleRedirectBack}
              >
                <ArrowBackIos fontSize="small" />
              </IconButton>
            )}
            {isAuth && (
              <Typography fontWeight={700} fontSize="1rem">
                {!!state?.title ? state.title : "Welcome"}
              </Typography>
            )}
          </>
        ) : (
          <Navigation isAuth={isAuth} />
        )}

        {isAuth && (
          <IconButton
            aria-label="user"
            onClick={handleUnAuth}
            color="inherit"
            sx={{ padding: 0, marginLeft: !!state?.title ? 0 : "auto" }}
          >
            <AccountCircle fontSize="large" />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
