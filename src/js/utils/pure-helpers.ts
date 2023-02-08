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
 * Copy or share a url
 * @param url string
 */
export async function shareOrCopyUrl(url: string) {
  if (
    window.navigator.canShare &&
    window.navigator.canShare({
      url,
    })
  ) {
    return await window.navigator.share({ url });
  } else {
    return await navigator.clipboard.writeText(url);
  }
}
