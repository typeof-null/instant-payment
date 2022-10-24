import { MouseEvent } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import signalIcon from "../../icons/signal.svg";
import visaIcon from "../../icons/visa.svg";
import TooltipWithOptions from "../tooltip-wth-options";
import { CardType, SxType } from "../../types";
import { CARD_TYPES } from "../../constants";
import { CARD_OPTIONS } from "./constants";

type Props = {
  amount: string;
  code: string;
  cardNumber: string;
  inspiredDate: string; // the lastDate of card
  type?: CardType;
  withOptions?: boolean;
  sx?: SxType;
};

function BankCard({
  amount,
  code,
  cardNumber,
  inspiredDate,
  type = CARD_TYPES.VISA,
  withOptions = true,
  sx,
}: Props) {
  const handleClickOption = (e: MouseEvent<HTMLUListElement>) =>
    console.log(`%cDO: ${(e.target as HTMLUListElement).title}`, "color:green");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 12px 10px 16px",
          width: "262px",
          background: "#EAEAEA",
          borderRadius: "16px",
          ...sx,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <img src={signalIcon} alt="signal" />
          <Typography
            fontWeight={700}
            sx={{ fontSize: "20px", color: "#008042" }}
          >
            {amount}
          </Typography>
        </Box>

        <Typography
          fontWeight={500}
          align="right"
          sx={{ fontSize: "12px", marginBottom: "6px" }}
        >
          {code}
        </Typography>

        <Typography
          fontWeight={700}
          align="center"
          sx={{ fontSize: "18px", marginBottom: "10px" }}
        >
          {cardNumber}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={700} align="center" sx={{ fontSize: "18px" }}>
            {inspiredDate}
          </Typography>
          <img src={visaIcon} alt="type of card" />
        </Box>
      </Box>
      {withOptions && (
        <Box display="flex" justifyContent="center">
          <Button
            sx={{
              color: "#008042",
              fontSize: "14px",
              letterSpacing: 0,
              paddingRight: 0,
              paddingLeft: 0,
              marginRight: "-12px",
            }}
          >
            Share
          </Button>
          <TooltipWithOptions
            options={CARD_OPTIONS}
            onClick={handleClickOption}
          >
            <IconButton>
              <IosShareIcon sx={{ fontSize: "1.2rem" }} />
            </IconButton>
          </TooltipWithOptions>
        </Box>
      )}
    </>
  );
}

export default BankCard;
