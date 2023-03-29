<template>
    <div>
        <router-link :to="item.link">
            <div @click="open" :class="getClassItem"
                class="text-start active-hover cursor-pointer font-normal font-sans text-[#ffffffa1] rounded p-2 my-2 grid grid-cols-6 ">
                <DynamicIcon width="20px" :component="item.icon" />
                <div class="col-span-4"> {{ item.name }}</div>
                <RightIcon v-if="hasChildren && !active" width="20px" />
                <DownIcon v-if="hasChildren && active" fill="white" stroke="white" width="20px" />
            </div>
        </router-link>
        <div v-if="active && hasChildren">
            <router-link v-for="(child, index) in item.children" :key="index"  :to="child.link">
                <div  @click="setActiveChild(index)" :class="getItem['children'][index]['isActive']"
                    class="active-hover  font-normal font-sans text-[#ffffffa1]  rounded p-2 my-[1px] grid grid-cols-6">
                    <div class="col-span-4"> {{ child['name'] }}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<style>
.active {
    background-color: #2c3344;
    color: white;
}

.active-hover:hover {
    background-color: #2c3344;
    color: white;
}
</style>


<script>

import DownIcon from '../icons/DownIcon.vue';
import RightIcon from '../icons/RightIcon.vue';

import DynamicIcon from '../DynamicComponenet.vue';

export default {
    name: 'AsideItem',
    components: {/* TaskIcon,*/ RightIcon, DownIcon,DynamicIcon},
    props: ['item', 'itemIndex'],
    inject: ['groupIndex'],
    mounted(){
        this.isActive()
    },
    data() {

        return {
            active: false
        }
    },
    methods: {
        open() {
            const info = {
                groupIndex: this.groupIndex,
                itemIndex: this.itemIndex
            }
            this.$store.commit("aside/activeItem", info)
            this.active = !this.active
        },
        setActiveChild(indexChild){
            const info = {
                groupIndex: this.groupIndex,
                itemIndex: this.itemIndex,
                indexChild:indexChild
            }
            this.$store.commit("aside/activeChildItem", info)
        },
        
        isActive(){
            if(this.item.link==this.$route.path)
                this.open()
            for(let i=0;i<this.item['children'].length;i++)
                if(this.item['children'][i].link==this.$route.path){
                    this.open()
                    this.setActiveChild(i)
                }
                    
            
         
        }


    },
    computed: {
        hasChildren() {
           return  (this.item.children && this.item.children.length > 0)?true:false 
        },

        getClassItem() {
            return this.$store.getters["aside/getEtatItem"](this.groupIndex, this.itemIndex)
        },
        getItem() {
            return this.$store.getters["aside/getItem"](this.groupIndex, this.itemIndex)
        }



    }


}
</script>