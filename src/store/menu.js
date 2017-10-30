const actions = {
    setMenuShow({commit}, param) {
        commit('UPDATESHOW',param)
    }
}
const mutations = {
    UPDATESHOW(state, param) {
        state.show = param
    }
}
const getters = {
    
}
const state = {
    show: true,
}
export default {
    state,
    mutations,
    actions,
    getters
}