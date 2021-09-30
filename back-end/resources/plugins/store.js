import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        burgers: null,
        beverages: null,
        combo: null,
        cartItems: [],
        checkedOut: null,
        withCoupon: false
    },
    mutations: {
        ADD_TO_CART(state, item) {
            state.cartItems.push(item);
        },
        REMOVE(state, index) {
            state.cartItems.splice(index, 1)
        },
        CHECK_OUT(state, item) {
            state.checkedOut = item
        },
        SET_BURGERS(state) {
            axios.get('api/burgers')
                .then(res => {
                    state.burgers = (res.data)
                })
        },
        SET_BEVERAGES(state) {
            axios.get('api/beverages')
                .then(res => {
                    state.beverages = (res.data)
                })
        },
        SET_COMBO(state) {
            axios.get('api/combo')
                .then(res => {
                    state.combo = (res.data)
                })
        },
        SET_COUPON(state, withCoupon) {
            state.withCoupon = withCoupon
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
        },
        setProducts(context) {
            context.commit('SET_BURGERS');
            context.commit('SET_BEVERAGES');
            context.commit('SET_COMBO')
        },
        withCoupon(context, withCoupon) {
            context.commit('SET_COUPON', withCoupon);
        }
    },
    getters: {
        burgers: state => state.burgers,
        beverages: state => state.beverages,
        combo: state => state.combo,
        cartItems: state => state.cartItems,
        checkedOut: state => state.checkedOut,
        withCoupon: state => state.withCoupon,
    }
})

export default store;