import { useState, useEffect } from "react";

/* Reactive screen media query observer binding layout break-points dynamically */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    /* Set primary matching status context based on screen footprint instantly */
    setMatches(mediaQuery.matches);

    const handler = (e) => setMatches(e.matches);

    /* Establish active listener subscription following display dimension adjustments */
    mediaQuery.addEventListener("change", handler);

    /* Clean up sequences disconnect event listeners to preserve runtime memory safety */
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
};
