import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    burgers: [
        { productId: 1, fileName: "burger", productName: "Regular Burger", quantity: 1, price: 35 },
        { productId: 2, fileName: "cheeseburger", productName: "Cheese Burger", quantity: 1, price: 50 },
        { productId: 3, fileName: "french_fry", productName: "French Fries", quantity: 1, price: 30 },
        { productId: 4, fileName: "hotdog", productName: "Hotdog Sandwich", quantity: 1, price: 40 },
    ],
    beverages: [
        { productId: 5, fileName: "coke", productName: "Coke", quantity: 1, price: 10 },
        { productId: 7, fileName: "sprite", productName: "Sprite", quantity: 1, price: 10 },
        { productId: 8, fileName: "fanta", productName: "Fanta", quantity: 1, price: 10 },
        { productId: 9, fileName: "iced_tea", productName: "Iced Tea", quantity: 1, price: 15 },
    ],
    combo: [
        { productId: 10, fileName: "burger_fries", productName: "Burger with Fries and Coke", quantity: 1, price: 40 },
        { productId: 11, fileName: "hotdog_fries", productName: "Hotdog with Fries and Coke", quantity: 1, price: 45 },
    ],
    cartItems: [],
    checkedOut: ["asdasdas"]
  },
  mutations: {
    ADD_TO_CART(state, item) {
        state.cartItems.push(item);
    },
    REMOVE(state, index) {
        state.cartItems.splice(index, 1)
    },
    CHECK_OUT(state, item) {
        state.checkedOut.push(item)
    }
  },
  actions: {
      addToCart(context, item) {
          context.commit('ADD_TO_CART', item);
      },
      remove(context, index) {
          context.commit('REMOVE', index);
      },
      checkout(context, item) {
          context.commit('CHECK_OUT', item);
      }
  },
  getters: {
      burgers: state => state.burgers,
      beverages: state => state.beverages,
      combo: state => state.combo,
      cartItems: state => state.cartItems,
      checkedOut: state => state.checkedOut,
  }
})

export default store;