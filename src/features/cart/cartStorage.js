const STORAGE_KEY = "audiophile_cart";

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

export const saveCartToStorage = (items) => {
  try {
    const serializedCart = JSON.stringify(items);
    localStorage.setItem(STORAGE_KEY, serializedCart);
  } catch (error) {
    console.error("Could not save cart", error);
  }
};
