
const formStore = {
    namespaced: true,
    state() {
        return {
            initData: {},
            err:{},
            clearForm:false,
        }
    },
    mutations: {
        setInitData(state, data) {
            console.log(data)
            state.initData = data
        },
        setErr(state,newErr){
            state.err=newErr
        },
        clearForm(state){
            state.initData={}
            state.err={}
            state.clearForm=true
        },
        changeEtat(state){
            state.clearForm=!state.clearForm
        }
    },
    getters: {
        getInitData(state) {
            return state.initData
        },
        getErr(state){
            return state.err
        },
        getClearForm(state){
            return state.clearForm
        }
    }

}

export default formStore