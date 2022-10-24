export const isFloatNum = (num: number): boolean =>
  Number(num) === num && num % 1 !== 0;

export const withFloat = (num: number): string =>
  String(isFloatNum(num) ? num : `${num}.00`);
