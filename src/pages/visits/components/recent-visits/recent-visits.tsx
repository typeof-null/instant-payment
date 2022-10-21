import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Visit } from "../../../../shared/types";
import { PAID } from "../../../../shared/constants";
import CheckIcon from "@mui/icons-material/Check";

type Props = { visits: Visit[] };

function RecentVisits({ visits }: Props) {
  console.log(
    visits[0].service.reduce((acc, cur) => acc + Number(cur.amount), 0)
  );

  const commission = 25.0;

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h6"
            fontWeight={600}
            color="text.primary"
            sx={{ marginBottom: "10px", fontSize: "1rem" }}
          >
            Recent Visits
          </Typography>
        </Box>

        {visits.map((visit, index) => (
          <Accordion
            key={index}
            sx={{
              background: "#EAEAEA",
              marginBottom: "8px",
            }}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight={600} sx={{ marginRight: "auto" }}>
                {visit.date}
              </Typography>
              <Typography
                align="right"
                fontWeight={600}
                sx={{ marginRight: "auto" }}
              >
                {visit.service.some((service) => service.paid === PAID.DEP)
                  ? "Partial Payment"
                  : "Full Payment"}
              </Typography>
              <Typography fontWeight={600}>
                {`$${
                  visit.service.reduce(
                    (acc, cur) => acc + Number(cur.amount),
                    0
                  ) + commission
                }`}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ padding: 0 }}>
              <List>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    fontWeight={600}
                    sx={{
                      width: "25%",
                    }}
                  >
                    Description
                  </Typography>
                  <Typography
                    fontWeight={600}
                    sx={{
                      width: "30%",
                    }}
                    align="right"
                  >
                    Paid
                  </Typography>
                  <Typography></Typography>
                </ListItem>
                {visit.service.map((service, index) => (
                  <ListItem
                    key={service.name + index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <>
                      <Typography
                        noWrap
                        sx={{
                          width: "30%",
                        }}
                      >
                        {service.name}
                      </Typography>
                      <Typography
                        align="right"
                        sx={{
                          width: "30%",
                          marginLeft: "auto",
                        }}
                      >{`$${service.amount} (${service.paid})`}</Typography>
                      {service.paid === PAID.DEP ? (
                        <Typography
                          sx={{
                            marginLeft: "auto",
                          }}
                          color="green"
                        >
                          File
                        </Typography>
                      ) : (
                        <CheckIcon
                          sx={{
                            marginLeft: "auto",
                          }}
                        />
                      )}
                    </>
                  </ListItem>
                ))}
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <>
                    <Typography
                      noWrap
                      sx={{
                        width: "30%",
                      }}
                    >
                      Total
                    </Typography>
                    <Typography
                      sx={{
                        width: "30%",
                        marginLeft: "auto",
                      }}
                      align="right"
                    >{`$${visit.service.reduce(
                      (acc, cur) => acc + Number(cur.amount),
                      0
                    )}`}</Typography>
                    <Typography
                      sx={{
                        marginLeft: "auto",
                      }}
                      color="green"
                    >
                      Add
                    </Typography>
                  </>
                </ListItem>
              </List>
            </AccordionDetails>

          </Accordion>
        ))}
      </Box>
    </>
  );
}

export default RecentVisits;
