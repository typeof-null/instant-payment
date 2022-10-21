import React, { MouseEvent, ReactElement, useState } from "react";
import { List, ListItem, Tooltip } from "@mui/material";

type Props = {
  options: string[];
  children: ReactElement<any, any>;
  onClick: (e: MouseEvent<HTMLUListElement>) => void;
};

function TooltipWithOptions({ options, children, onClick }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const renderOptions = () => (
    <List onClick={onClick}>
      {options.map((option, index) => (
        <ListItem key={index} title={option}>
          {option}
        </ListItem>
      ))}
    </List>
  );

  return (
    <Tooltip
      open={open}
      title={renderOptions()}
      onClick={handleClick}
      placement="bottom-start"
      componentsProps={{
        tooltip: {
          sx: {
            background: "#fff",
            color: "text.primary",
            padding: 0,
            boxShadow:
              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);",
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
}

export default TooltipWithOptions;
