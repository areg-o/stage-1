import { useRef } from "react";

export function useDebounce<T>() {
  let timeOut = useRef<number | undefined>(undefined);

  const debounce = (func: () => T, time: number = 300) => {
    clearTimeout(timeOut.current);

    timeOut.current = setTimeout(func, time);
  };
  return { debounce };
}
