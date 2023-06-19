import { useEffect, useState } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

const isBrowser = typeof window !== "undefined";

export default function useScrollPosition(): ScrollPosition {
  const [position, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  useEffect(() => {
    let requestRunning: number | null = null;

    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition({ x: window.scrollX, y: window.scrollY });
          requestRunning = null;
        });
      }
    }

    if (isBrowser) {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return position;
}
