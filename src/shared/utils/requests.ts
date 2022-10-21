export function debounce(cb: (...rest: any) => void, delay: number = 250) {
  let timeout: string | number | NodeJS.Timeout | undefined;

  return (...args: any) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
