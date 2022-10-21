import { STEPS } from "./constants";

export type Step = typeof STEPS[keyof typeof STEPS];