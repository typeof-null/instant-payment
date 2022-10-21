import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ServiceOption } from "../../../../shared/types";
import InfoBadge from "../../../../shared/components/info-badge";

type Props = {
  services: ServiceOption[];
  onClick: () => void;
  onRefresh: () => void;
};

function Payment({ services, onClick, onRefresh }: Props) {

  const handleClickCallLink = () => console.log("%cDO CALL", "green")  
  return (
    <>
      <Box display="flex" alignItems="center" sx={{ margin: "0 auto 20px" }}>
        <Typography fontSize="20px" fontWeight={700}>
          Payment
        </Typography>
        <IconButton onClick={onRefresh}>
          <RefreshIcon />
        </IconButton>
      </Box>
      <List
        sx={{
          margin: "0 auto 20px",
          width: "80%",
        }}
      >
        {services.map(({ category, service }, index) => (
          <ListItem
            key={index}
            sx={{
              background: index % 2 === 0 ? "#FAFAFA" : "#fff",
              justifyContent: "center",
            }}
          >{`${category} - ${service}`}</ListItem>
        ))}
      </List>
      <Typography
        fontWeight={700}
        fontSize={26}
        align="center"
        sx={{ color: "#008042", margin: "0 auto" }}
      >
        $124.99
      </Typography>
      <InfoBadge
        title="The amount represents payment in full."
        description="Please bill payer for any additional services."
        sx={{
          background: "#fff",
        }}
      />
      <Button
        sx={{
          color: "#2C0777",
          background: "#EAEAEA",
          borderRadius: "16px",
          padding: "10px 16px",
          margin: "20px auto 0",
        }}
        onClick={onClick}
      >
        Proceed to Payment
      </Button>
      <Button onClick={handleClickCallLink} sx={{ color: "#008042", textDecoration: "underline",
    margin: "20px auto 0",
    }}>
        Call us to discuss other options
      </Button>
    </>
  );
}

export default Payment;
