import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    count:23
}
const mutations={
    mutationsAddCount(state,n=0){
        return (state.count += n)
    },
    mutationsReduceCount(state,n=0){
        return (state.count -= n)
    }
}
export default new Vuex.Store({
    state,
    mutations
})
