import {
  CARD_TYPES,
  PAID,
  ROLES,
  SERVICES,
  SERVICE_CATEGORIES,
  SPECIALITIES,
} from "../constants";
import { SxProps, Theme } from "@mui/material";

/** PRODUCT TYPES **/
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
  speciality: string; // Primary Care Physician
  address: string;
  distance: string; // 2 miles
  rate: string; // $119.50
  rateConditions?: string; // Mon-Thu 10A-2PM
};
export type Payer = {};

export type VisitService = {
  name: string;
  paid?: Paid; // full | dep
  amount: number;
  actions: string; // file
};
export type Visit = {
  date: string;
  service: VisitService[];
};

export type PaymentCard = {
  number: string;
  expiration: string;
  secCode: string;
  amount: string;
};

export type ServiceOption = {
  category: ServiceCategory;
  service: Service;
};

export type Role = typeof ROLES[keyof typeof ROLES];

export type Service = typeof SERVICES[keyof typeof SERVICES];
export type ServiceCategory =
  typeof SERVICE_CATEGORIES[keyof typeof SERVICE_CATEGORIES];
export type Speciality = typeof SPECIALITIES[keyof typeof SPECIALITIES];

export type Paid = typeof PAID[keyof typeof PAID];
export type CardType = typeof CARD_TYPES[keyof typeof CARD_TYPES];

/** THEME TYPES **/
export type SxType = SxProps<Theme>;
