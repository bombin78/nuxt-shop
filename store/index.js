import Vuex from "vuex";
import Products from "../services/Products";

export default function () {
  return new Vuex.Store({
    state: {
      products: [],
      cart: [],
    },
    mutations: {
      SET_PRODUCTS(state, products) {
        state.products = products;
      },
      ADD_TO_CART(state, product) {
        state.cart.push(product);
      },
      CLEAR_CART(state) {
        state.cart = [];
      },
    },
    actions: {
      async LOAD_PRODUCTS({ commit }) {
        commit("SET_PRODUCTS", await Products.all());
      },
    },
  });
}
