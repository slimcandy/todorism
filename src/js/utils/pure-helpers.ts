/**
 * Throttle a function
 * @url https://decipher.dev/30-seconds-of-typescript/docs/throttle/
 */
export const throttle = (fn: (...args: IArguments[]) => void, wait = 300) => {
  let inThrottle: boolean;
  let lastFn: ReturnType<typeof setTimeout>;
  let lastTime: number;
  return function throttleFn(this: unknown, ...args: IArguments[]) {
    if (!inThrottle) {
      fn.apply(this, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(this, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

/**
 * Copy a url
 * @param url string
 */
export function copyUrl(url: string): Promise<void> {
  const { navigator } = window;
  return navigator.clipboard.writeText(url);
}
