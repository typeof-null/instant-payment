import { ROLES, STEPS } from "./contstants";

export type Step = typeof STEPS[keyof typeof STEPS];
export type Role = typeof ROLES[keyof typeof ROLES];

export type Patient = {
  name: string;
  date: string; // dob
  memberId: string;
  coPay: string; // $25
  coInsurance: string; // 20%
  remainingDeductible: string; // $1024
};
export type Provider = {
  name: string;
  specialty: string; // Primary Care Physician
  address: string;
  distance: string; // 2 miles
  rate: string; // $119.50
  rateConditions?: string; // Mon-Thu 10A-2PM
};
export type Payer = {};
