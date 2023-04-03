import Api from "@/api"
import error_parse from '@/api/error_parse';
const tableStore = {
    namespaced: true,
    state() {
        return {
            rows: [],
            isLoading: false,
            orderBy: {},
            methode: '',
            path: '',
            filter: [],
            customFilter:{},
            pageSize: 10,
            currentPage: 1,
            totalPages: 1,
            search: ""

        }
    },
    getters: {
        getRows(state) {
            return state.rows
        },

        isLoading(state) {
            
            return state.isLoading
        },
        getOrderBy(state) {
            return state.orderBy
        },
        getTotalPages(state) {
            return state.totalPages
        },
        getCurrentPage(state) {
            return state.currentPage
        },
        getPageSize(state) {
            return state.pageSize
        },
        getSearch(state) {
            return state.search
        },




    },
    mutations: {

        setRows(state, rows) {
            state.rows = rows
        },
        setPageSize(state, value) {

            state.pageSize = value
            state.currentPage = 1
        },
        setCurrentPage(state, page) {
            state.currentPage = page
        },
        setData(state, data) {
            state.rows = data.items
            state.pageSize = data.page_size
            state.totalPages = data.total_pages
            state.currentPage = data.current_page
        },

        setIsLoading(state, etat) {
            state.isLoading = etat
        },
        deleteRow(state, row) {
            for (let i = 0; i < state.rows.length; i++) {
                if (row == state.rows[i]) {
                    state.rows.splice(i, 1)
                }
            }
        },
        setPath(state, path) {
            state.rows = []
            state.filter = []
            state.orderBy={}
            state.path = path
            state.search=""
            state.customFilter={}
            this.commit('table/loadData')
        },
        setOrderBy(state, orderBy) {
            state.orderBy = orderBy
            this.commit('table/loadData')
        },
        setSearch(state, word) {
            state.search = word
            this.commit('table/loadData')
        },
        loadData(state) {
            const payload = {
                "data": {
                    "current_page": state.currentPage,
                    "page_size": state.pageSize,
                    "filter": state.filter,
                    "orderBy":(state.orderBy['name']!=undefined)?state.orderBy['name']+" "+state.orderBy['order']:"",
                    "search": state.search,
                    "customFilter":state.customFilter
                },
                "methode": "post",
                "path": state.path
            }
            this.dispatch('table/loadData', payload)
        },
        addFilter(state, item) {
            state.rows = []
            let notExist = true
            state.filter.forEach(e => {
                if (item['champ'] == e['champ']) {
                    notExist = false
                    e['value'] = item['value']
                }
            });
            if (notExist) {
                state.filter.push(item)
            }

            this.commit('table/loadData')
        },
        addCustomFilter(state,item){
            state.customFilter[item['champ']]=item['value']
            this.commit('table/loadData')
        },
        exportData(state, payload) {
            const data = {
                "data": {
                    "current_page": state.currentPage,
                    "page_size": state.pageSize,
                    "filter": state.filter,
                    "orderBy": state.orderBy['name']+" "+state.orderBy['order'],
                    "search": state.search,
                    "customFilter":state.customFilter
                },

                "path": "user/export/" + payload['type'],
                "fileName": payload['fileName']
            }
            this.dispatch('table/exportData', data)

        },
        clearFilter(state) {
            state.filter = {}
        },


    },
    actions: {
        async exportData({ commit }, payload) {
            commit('setIsLoading', true)
            try {
                const response = await Api.post(payload.path, payload.data)
                Api.get(response['data'], { responseType: 'blob' })
                    .then(response => {
                        const blob = new Blob([response.data],)
                        const link = document.createElement('a')
                        link.href = URL.createObjectURL(blob)
                        link.download = payload.fileName
                        link.click()
                        URL.revokeObjectURL(link.href)
                    }).catch(console.error)

            } catch (err) {
                error_parse(err)
            } finally {
                commit('setIsLoading', false)
            }
        },
        async loadData({ commit }, payload) {
            commit('setIsLoading', true)
            try {

                if (payload.methode == "post") {
                     const response = await Api.post(payload.path, payload.data)
                     commit('setData', response.data)
                }
                else {
                    const response = await Api.get(payload.path)
                    commit('setRows', response.data)
                }
            } catch (err) {
                error_parse(err)

            } finally {
                commit('setIsLoading', false)
            }
        },

        async updateEtat(obj, payload) {

            try {
                await Api.post(payload['data']['path']+"/"+payload['ID'], )
            } catch (error) {
                error_parse(error)
            }
        }




    }

}

export default tableStore