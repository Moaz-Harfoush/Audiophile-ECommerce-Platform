import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  /* Extract the current URL route location pathname */
  const { pathname } = useLocation();

  /* Listen directly to route transitions and reset viewport coordinates to top-left */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /* This component acts purely as a behavior controller and does not render visual UI elements */
  return null;
};

export default ScrollToTop;
