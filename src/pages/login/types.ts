import { STEPS } from "./contstants";

export type Step = typeof STEPS[keyof typeof STEPS];
