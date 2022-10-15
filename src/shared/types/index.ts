import { PAID, ROLES, SERVICES, SPECIALITIES } from "../constants";

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

export type Visit = {
  date: string;
  service: string;
  amount: string;
  paid?: string; // fill | dep
  actions: string; // file
};

export type PaymentCard = {
  number: string;
  expiration: string;
  secCode: string;
  amount: string;
};

export type Paid = typeof PAID[keyof typeof PAID];

export type Role = typeof ROLES[keyof typeof ROLES];

export type Service = typeof SERVICES[keyof typeof SERVICES];

export type Speciality = typeof SPECIALITIES[keyof typeof SPECIALITIES];
