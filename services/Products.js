const products = [
  {
    id: 1, title: "MacBook Pro", price: 149000, brief: "Описание товара", inStock: true, type: "notebook",
  },
  {
    id: 2, title: "Iphone X", price: 89000, brief: "Описание товара", inStock: true, type: "phone",
  },
  {
    id: 3, title: "Samsung Galaxy 9", price: 19000, brief: "Описание товара", inStock: false, type: "phone",
  },
  {
    id: 4, title: "MacBook Air", price: 79000, brief: "Описание товара", inStock: true, type: "notebook",
  },
  {
    id: 5, title: "Lenovo Yoga", price: 95000, brief: "Описание товара", inStock: true, type: "notebook",
  },
  {
    id: 6, title: "Lenovo IdeaPad", price: 29000, brief: "Описание товара", inStock: false, type: "notebook",
  },
];

export default {
  async all() {
    return [...products];
  },
};
