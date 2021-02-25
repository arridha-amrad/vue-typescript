import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { ICart, IProduct } from "../interfaces/IProduct";
import ProductsJSON from "../mock/producs.json";

// define your typings for the store state
export interface State {
  products: IProduct[];
  carts: ICart[];
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    products: [],
    carts: [],
  },
  getters: {
    products: (state) => state.products,
    carts: (state) => state.carts,
  },
  actions: {
    getProducts({ commit }) {
      commit("getProductsData");
    },

    // CART
    // getItemsInCart({ commit }) {
    //   commit("getCartItems");
    // },
    addToCart({ commit, state }, item: ICart) {
      const isItemExist = state.carts.find((val) => val.title === item.title);
      console.log("isItemExist : ", isItemExist);
      if (!isItemExist) {
        commit("addProductToCart", { ...item, amount: 1 });
      } else {
        commit("increaseItemInCart", item);
      }
      console.log(state.carts);
    },
    increaseItem({ commit }, item: ICart) {
      commit("increaseItemInCart", item);
    },
    decreaseItem({ commit }, item: ICart) {
      commit("dereaseItemInCart", item);
    },
    deleteItemFromCart({ commit }, product: IProduct) {
      commit("deleteFromCart", product);
    },
  },
  mutations: {
    getProductsData(state) {
      state.products = ProductsJSON;
    },

    // CART
    addProductToCart(state, item: ICart) {
      state.carts.push(item);
    },
    increaseItemInCart(state, item: ICart) {
      console.log("item in cart increase");
      state.carts.map((val) =>
        val.title === item.title ? (val.amount += 1) : ""
      );
    },
    dereaseItemInCart(state, item: ICart) {
      state.carts.map((val) =>
        val.title === item.title ? (val.amount -= 1) : ""
      );
    },
    deleteFromCart(state, product: IProduct) {
      console.log(product.title);
      state.carts = state.carts.filter((val) => val.title !== product.title);
    },
  },
});
