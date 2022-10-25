import { Toolbar } from "@mui/material";
import Navigation from "../navigation";

type Props = {
  isAuth?: boolean;
};
function MobileFooter({ isAuth = false }: Props) {
  return (
    <Toolbar
      component="footer"
      variant="dense"
      disableGutters
      sx={{
        margin: "auto 0 0",
        backgroundColor: "#EAEAEA",
        width: "100%",
        position: "absolute",
        bottom: 0,
        zIndex: 2000,
      }}
    >
      <Navigation isAuth={isAuth} isMobileApp sx={{ height: "62px" }} />
    </Toolbar>
  );
}

export default MobileFooter;
