import Vuex from "vuex";
import Products from "../services/Products";
import Cart from "../services/Cart";

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
        const item = state.cart.find((i) => product.id === i.product.id);
        if (item) {
          item.quantity += 1;
        } else {
          state.cart.push({
            product,
            quantity: 1,
          });
        }
      },
      REMOVE_FROM_CART(state, product) {
        const index = state.cart.findIndex((i) => product.id === i.product.id);
        if (index > -1) {
          state.products.splice(index, 1);
        }
      },
      CLEAR_CART(state) {
        state.cart = [];
      },
      SET_CART(state, items) {
        state.cart = items;
      },
    },
    actions: {
      async LOAD_PRODUCTS({ commit }) {
        commit("SET_PRODUCTS", await Products.all());
      },
      async ADD_TO_CART({ commit, state }, product) {
        commit("ADD_TO_CART", product);
        await Cart.saveItems(state.cart);
      },
      async REMOVE_FROM_CART({ commit, state }, product) {
        commit("REMOVE_FROM_CART", product);
        await Cart.saveItems(state.cart);
      },
      async LOAD_CART({ commit }) {
        const items = await Cart.getItems();
        commit('SET_CART', items);
      },
    },
    getters: {
      cartItemsCount(state) {
        return state.cart.reduce((acc, item) => acc + item.quantity, 0);
      },
      cartTotalPrice(state) {
        return state.cart.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
      },
    },
  });
}
