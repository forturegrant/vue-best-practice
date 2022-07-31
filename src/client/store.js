import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    getter: {

    },
    mutations: {
        add(state) {
            state.count++
        },
        addN(state, step) {
            state.count += step
        },
    },
    actions: {
        addAsync(context) {
            setTimeout(() => {
                context.commit('add');
            }, 1000)
        },
        addNAsync(context, step) {
            setTimeout(() => {
                context.commit('addN', step);
            }, 1000)
        }
    },
    getters: {
        showNum(state) {
            return '当前最新的值为【' + state.count + '】';
        }
    }
})
