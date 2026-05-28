import { useState } from "react";

/* Abstracted state controller managing successful checkout order modal overlays */
const useCheckoutForm = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => setIsOverlayOpen(true);
  const closeOverlay = () => setIsOverlayOpen(false);

  return {
    isOverlayOpen,
    openOverlay,
    closeOverlay,
  };
};

export default useCheckoutForm;
