import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    names: [
        { productId: 1, fileName: "burger", productName: "Regular Burger", quantity: 1, price: 35 },
        { productId: 2, fileName: "cheeseburger", productName: "Cheese Burger", quantity: 1, price: 50 },
        { productId: 3, fileName: "french_fry", productName: "French Fries", quantity: 1, price: 30 },
        { productId: 4, fileName: "hotdog", productName: "Hotdog Sandwich", quantity: 1, price: 40 },
    ],
    cartItems: []
  },
  mutations: {
    ADD_TO_CART(state, item) {
        state.cartItems.push(item);
    },
    REMOVE(state, index) {
        state.cartItems.splice(index, 1)
    }
  },
  actions: {
      addToCart(context, item) {
          context.commit('ADD_TO_CART', item);
      },
      remove(context, index) {
          context.commit('REMOVE', index);
      }
  },
  getters: {
      names: state => state.names,
      cartItems: state => state.cartItems,
  }
})

export default store;