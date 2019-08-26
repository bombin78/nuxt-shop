const storageIsEnabled = () => typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

export default {
  async getItems() {
    if (storageIsEnabled()) {
      const items = localStorage.getItem('CART_ITEMS');
      if (items !== null) {
        return JSON.parse(items);
      }
    }
    return [];
  },
  async saveItems(items) {
    if (storageIsEnabled()) {
      localStorage.setItem('CART_ITEMS', JSON.stringify(items));
    }
  },
};
