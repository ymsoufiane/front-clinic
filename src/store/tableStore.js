import Api from "@/api"
import store from "@/store";
const tableStore = {
    namespaced: true,
    state() {
        return {
            rows: [],
            cols: [],
            isLoading: false,
            filterChamp: '',
            filterValue: '',
            orderBy:{},
            methode: '',
            path: '',
            err: {}
        }
    },
    getters: {
        getRows(state) {
            return state.rows
        },
        getCols(state) {
            return state.cols
        },
        isLoading(state) {
            return state.isLoading
        },
        getOrderBy(state){
            return state.orderBy
        }


    },
    mutations: {
        setCols(state, cols) {
            state.cols = cols
        },
        setRows(state, rows) {
            state.rows = rows
        },
        setErr(state, err) {
            state.err = err
        },
        setIsLoading(state, etat) {
            state.isLoading = etat
        },
        setFilterChamp(state, champ) {
            state.filterChamp = champ
        },
        setPath(state, path) {
            state.path = path
        },
        setOrderBy(state,orderBy){
            state.orderBy=orderBy
            this.commit('table/setFilterValue',state.filterValue)
        },
        setFilterValue(state, value) {
            state.filterValue = value
            const payload = {
                "data": {
                    "champ": state.filterChamp,
                    "value": state.filterValue,
                    "orderBy":state.orderBy
                },
                "methode": "post",
                "path": state.path
            }

            this.dispatch('table/loadData', payload)
        },
        clearFilter(state){
            state.filterChamp=''
            state.filterValue=''
        }
    },
    actions: {
        async loadData({ commit }, payload) {
            commit('setIsLoading', true)
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Token': store.getters['user/getToken']
                }
            }
            try {

                if (payload.methode == "post") {
                    const response = await Api.post(payload.path, payload.data, config)
                    commit('setCols', response.data)
                }
                else {
                    const response = await Api.get(payload.path, config)
                    commit('setCols', response.data)
                }
            } catch (err) {
                commit('setErr', err)

            } finally {
                commit('setIsLoading', false)
            }


        },




    }

}

export default tableStore