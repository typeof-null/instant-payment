import { Breakpoint, Theme } from "@mui/material";

export const setMediaQuery =
  (size: number | Breakpoint = 416, direction: "up" | "down" = 'down') => (theme: Theme) =>
    theme.breakpoints[direction](size);
