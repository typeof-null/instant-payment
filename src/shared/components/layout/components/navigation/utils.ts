import profile from "../../../../icons/profile.svg";
import visits from "../../../../icons/visits.svg";
import alerts from "../../../../icons/alerts.svg";
import help from "../../../../icons/help.svg";

export const getNavIconSrc = (nav: string): string => {
  let icon = profile;

  if (nav === "Help") {
    icon = help;
  }
  if (nav === "Visits") {
    icon = visits;
  }
  if (nav === "Alerts") {
    icon = alerts;
  }
  return icon;
};
