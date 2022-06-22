/**
 * Throttle a function
 * @url https://decipher.dev/30-seconds-of-typescript/docs/throttle/
 */
export const throttle = (fn: () => void, wait = 300) => {
  let inThrottle: boolean;
  let lastFn: ReturnType<typeof setTimeout>;
  let lastTime: number;
  return function throttleFn(this: unknown, ...args: IArguments[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const context = this;
    if (!inThrottle) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

export default { throttle };
