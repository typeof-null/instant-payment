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
import { withFloat } from "../../../../shared/utils/numbers";
import checkbox from "../../../../shared/icons/checkbox.svg";

type Props = { visits: Visit[] };

function RecentVisits({ visits }: Props) {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box display="flex" justifyContent="space-between">
          <Typography
            fontSize="12px"
            fontWeight={600}
            color="text.primary"
            sx={{ margin: "10px 10px 4px" }}
          >
            Recent Visits
          </Typography>
        </Box>

        {visits.map((visit, index) => (
          <Accordion
            key={index}
            sx={{
              background: "#EAEAEA",
              margin: "0 4px 8px",
              boxShadow: "none",
              border: "none",
            }}
            style={{
              margin: "0 4px 8px",
              boxShadow: "none",
              border: "none",
            }}
          >
            <AccordionSummary
              sx={{
                display: "flex",
                justifyContent: "space-between",

                padding: "0 6px",
                height: "32px",
                minHeight: 0,
                margin: 0,
              }}
              style={{
                minHeight: 0,
              }}
            >
              <Typography
                fontSize={14}
                fontWeight={600}
                sx={{
                  order: 0,
                  flexGrow: 1,
                }}
              >
                {visit.date}
              </Typography>

              <Typography
                fontWeight={600}
                fontSize={14}
                sx={{
                  order: 1,
                  flexGrow: 1,
                }}
              >
                {visit.service.some((service) => service.paid === PAID.DEP)
                  ? "Partial Payment"
                  : "Full Payment"}
              </Typography>

              <Typography
                fontSize={14}
                fontWeight={600}
                sx={{
                  order: 2,
                  flexGrow: 0,
                }}
              >
                {`$${withFloat(
                  visit.service.reduce(
                    (acc, cur) => acc + Number(cur.amount),
                    0
                  )
                )}`}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                background: "#FAFAFA",
                padding: 0,
              }}
            >
              <List>
                <ListItem
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography
                    fontSize={14}
                    fontWeight={600}
                    sx={{
                      order: 0,
                      flexGrow: 1,

                      width: "195px",
                    }}
                  >
                    Description
                  </Typography>

                  <Typography
                    fontSize={14}
                    fontWeight={600}
                    align="right"
                    sx={{
                      order: 2,
                      flexGrow: 2,
                      width: "90px",
                    }}
                  >
                    Paid
                  </Typography>

                  <Typography
                    sx={{
                      order: 3,
                      flexGrow: 3,
                    }}
                  >
                    {" "}
                  </Typography>
                </ListItem>

                {visit.service.map((service, index) => (
                  <ListItem
                    key={service.name + index}
                    divider
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <>
                      <Typography
                        fontSize={14}
                        noWrap
                        sx={{
                          order: 0,
                          flexGrow: 1,
                          width: "195px",
                        }}
                      >
                        {service.name}
                      </Typography>
                      <Typography
                        fontSize={14}
                        align="right"
                        sx={{
                          order: 2,
                          flexGrow: 2,
                          width: "115px",
                        }}
                      >{`$${service.amount} (${service.paid})`}</Typography>

                      <Typography
                        color="green"
                        align="right"
                        fontSize={14}
                        sx={{
                          order: 3,
                          flexGrow: 3,
                        }}
                      >
                        {service.paid === PAID.DEP ? (
                          "File"
                        ) : (
                          <img
                            src={checkbox}
                            alt="checkbox"
                            style={{ display: "block", marginLeft: "auto" }}
                          />
                        )}
                      </Typography>
                    </>
                  </ListItem>
                ))}
                <ListItem>
                  <>
                    <Typography
                      fontSize={14}
                      noWrap
                      sx={{
                        order: 0,
                        flexGrow: 1,
                        width: "195px",
                      }}
                    >
                      Total
                    </Typography>
                    <Typography
                      fontSize={14}
                      align="right"
                      sx={{
                        order: 2,
                        flexGrow: 2,
                        width: "115px",
                      }}
                    >{`$${visit.service.reduce(
                      (acc, cur) => acc + Number(cur.amount),
                      0
                    )}`}</Typography>
                    <Typography
                      fontSize={14}
                      color="green"
                      align="right"
                      sx={{
                        order: 3,
                        flexGrow: 3,
                      }}
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
