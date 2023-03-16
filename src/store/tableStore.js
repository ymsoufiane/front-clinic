import Api from "@/api"
import store from "@/store";
const tableStore = {
    namespaced: true,
    state() {
        return {
            rows: [],
            cols: [],
            isLoading: false,
            orderBy: {},
            methode: '',
            path: '',
            err: {},
            filter: [],
            pageSize:2,
            currentPage:1,
            totalPages:500,

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
        getOrderBy(state) {
            return state.orderBy
        },
        getTotalPages(state){
            console.log('total page '+state.totalPages)
            return state.totalPages
        },
        getCurrentPage(state){
            console.log("run get current page "+state.currentPage)
            return state.currentPage
        },
        getPageSize(state){
            return state.pageSize
        }



    },
    mutations: {
        setCols(state, cols) {
            state.cols = cols
            state.currentPage=1
        },
        setRows(state, rows) {
            state.rows = rows 
        },
        setPageSize(state,value){
            state.pageSize=value
            state.currentPage=1
        },
        setCurrentPage(state,page){
            state.currentPage=page
        },
        setData(state, data) {
            state.rows = data.items
            state.pageSize=data.page_size
            state.totalPages=data.total_pages
            state.currentPage=data.current_page
        },
        setErr(state, err) {
            state.err = err
        },
        setIsLoading(state, etat) {
            state.isLoading = etat
        },

        setPath(state, path) {
            state.path = path
        },
        setOrderBy(state, orderBy) {
            state.orderBy = orderBy

        },
        loadData(state){
            const payload={
                "data": {
                    "current_page": state.currentPage,
                    "page_size": state.pageSize,
                    "filter": state.filter,
                    "orderBy": state.orderBy
                },
                "methode": "post",
                "path": state.path
            }
            this.dispatch('table/loadData', payload)
        },
        addFilter(state, item) {
            let notExist = true
            state.filter.forEach(e => {
                if (item['champ'] == e['champ']) {
                    notExist = false
                    e['value'] = item['value']
                    e['op'] = item['op']
                    e['champ']=item['champ']
                }
            });
            if (notExist) {
                state.filter.push(item)
            }
            this.commit('table/loadData')
        },

        clearFilter(state) {
            state.filter = {}
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
                    commit('setData', response.data)
                }
                else {
                    const response = await Api.get(payload.path, config)
                    commit('setRows', response.data)
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