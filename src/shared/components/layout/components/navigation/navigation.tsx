import { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { List, ListItemButton, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../../../../utils/letters";
import { SxType } from "../../../../types";
import { getNavIconSrc } from "./utils";
import { NAVS } from "./constants";

type Props = {
  isAuth: boolean;
  isMobileApp?: boolean;
  sx?: SxType;
};

function Navigation({ isAuth, isMobileApp, sx }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isPaymentPage = pathname.includes("payment");

  const handleRedirect = (e: MouseEvent<HTMLDivElement>) => {
    const pageName = (e.target as HTMLDivElement).textContent?.toLowerCase();

    if (pageName === "visits") {
      navigate(`/${pageName}`, {
        state: { title: capitalizeFirstLetter(pageName) },
      });
    }
  };

  const getNavList = (): string[] => {
    let navList = NAVS;
    if (isAuth) {
      navList = ["Alerts", ...navList.filter((nav) => nav !== "Profile")];
    }
    if (isPaymentPage) {
      navList = ["Visits", ...navList];
    }
    return navList;
  };

  return (
    <List
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        margin: "0 auto",
        ...sx,
      }}
    >
      {getNavList().map((nav) => (
        <ListItemButton
          key={nav}
          sx={{
            display: "flex",
            borderRadius: "16px",

            ...(isMobileApp && {
              flexDirection: isMobileApp ? "column" : "row",
              marginRight: "20px",
              alignItems: "center",
            }),
          }}
          title={nav}
          onClick={handleRedirect}
        >
          <img
            src={getNavIconSrc(nav)}
            alt={nav}
            style={{
              pointerEvents: "none",
              // marginBottom: nav === "Help" ? "4px" : 0,
            }}
          />
          <Typography
            fontWeight="500"
            fontSize={isMobileApp ? "12px" : "1rem"}
            sx={{ marginLeft: isMobileApp ? 0 : "8px" }}
          >
            {nav}
          </Typography>
        </ListItemButton>
      ))}
    </List>
  );
}

export default Navigation;
