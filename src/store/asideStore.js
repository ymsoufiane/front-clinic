
const asideStore = {
    namespaced: true,
    state() {
        return {
            groups: [],
            activeGroup:0,
            activeItem:0,
            activeChild:0,
            isOpen:true,
        }
    },
    mutations: {
        addGroups(state, groups) {
            state.groups.push(...groups)
        },

        addGroup(state, group) {
            state.groups.push(group)
        },
        activeItem:(state,info)=>{
            const item=state.groups[state.activeGroup]['items'][state.activeItem]
            item['isActive']=""
            if(item['children'].length>0)
                item['children'][state.activeChild]['isActive']=""
            state.activeGroup=info.groupIndex
            state.activeItem=info.itemIndex
            state.activeChild=0
            state.groups[info.groupIndex]['items'][info.itemIndex]['isActive']="active"
        },
        activeChildItem(state,info){
            const item=state.groups[state.activeGroup]['items'][state.activeItem]   
            item['isActive']=""
            item['children'][state.activeChild]['isActive']=""
            state.activeGroup=info.groupIndex
            state.activeItem=info.itemIndex
            state.activeChild=info.indexChild
            state.groups[state.activeGroup]['items'][state.activeItem]['children'][info.indexChild]['isActive']="active"
        },

        changeEtat(state){
            state.isOpen=!state.isOpen
        }


    },
    getters: {
        getGroups(state) {
            return state.groups
        },
        getEtatItem:(state)=>(groupIndex,itemIndex)=>{
            return state.groups[groupIndex]['items'][itemIndex]['isActive']
        },
        getItem:(state)=>(groupIndex,itemIndex)=>{
            return state.groups[groupIndex]['items'][itemIndex]
        },

        getEtat(state){
            return state.isOpen
        }

    }
}
export default asideStore