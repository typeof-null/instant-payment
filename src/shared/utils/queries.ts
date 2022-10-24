import { Breakpoint, Theme } from "@mui/material";

export const setMediaQuery =
  (size: number | Breakpoint, direction: "up" | "down" = 'down') => (theme: Theme) =>
    theme.breakpoints[direction](size);
