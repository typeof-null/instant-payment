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
import { withFloat } from "../../../../shared/utils/numbers";

type Props = {
  services: ServiceOption[];
  onClick: (sum: string) => void;
  onRefresh: () => void;
};

function Payment({ services, onClick, onRefresh }: Props) {
  const sum = withFloat(
    services.reduce((acc, cur) => acc + Number(cur.rate), 0)
  );

  const handleClickCallLink = () => console.log("%cDO CALL", "green");
  const handleProceedClick = () => onClick(sum);

  return (
    <>
      <Box display="flex" alignItems="center" sx={{ margin: "0 auto 20px" }}>
        <Typography
          fontSize="18px"
          fontWeight={700}
          textAlign="center"
          sx={{
            flex: 1,
            marginLeft: "50px",
          }}
        >
          Payment
        </Typography>
        <IconButton
          onClick={onRefresh}
          sx={{
            marginRight: "10px",
          }}
        >
          <RefreshIcon />
        </IconButton>
      </Box>
      <List
        sx={{
          marginBottom: "20px",
          padding: "0 20px",
        }}
      >
        {services.map(({ category, service }, index) => (
          <ListItem
            key={index}
            sx={{
              background: index % 2 === 0 ? "#FAFAFA" : "#fff",
              justifyContent: "flex-start",
              padding: "0 10pxs",
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
        ${sum}
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
          margin: "0 auto",
          fontWeight: 600,
          fontSize: "14px",
          display: "block",
          width: "185px",
          height: "40px",
        }}
        onClick={handleProceedClick}
      >
        Proceed to Payment
      </Button>
      <Button
        sx={{
          display: "block",
          color: "#008042",
          textDecoration: "underline",
          margin: "10px auto 0",
        }}
        onClick={handleClickCallLink}
      >
        Call us to discuss other options
      </Button>
    </>
  );
}

export default Payment;
