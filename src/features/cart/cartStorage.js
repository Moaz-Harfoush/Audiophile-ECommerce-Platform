const STORAGE_KEY = "audiophile_cart";

/* Safely retrieve state string values from local storage keys */
export const loadCartFromStorage = () => {
  try {
    const serializedCart = localStorage.getItem(STORAGE_KEY);
    if (serializedCart === null) return [];
    return JSON.parse(serializedCart);
  } catch (error) {
    console.error("Could not load cart", error);
    return [];
  }
};

/* Persist updated local slice list arrays back into browser memory */
export const saveCartToStorage = (items) => {
  try {
    const serializedCart = JSON.stringify(items);
    localStorage.setItem(STORAGE_KEY, serializedCart);
  } catch (error) {
    console.error("Could not save cart", error);
  }
};
