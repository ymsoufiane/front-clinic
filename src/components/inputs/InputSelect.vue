<template>
    <div class="input-select py-2">
        <div class="title py  text-sm" :class="colorTitle">
            {{ input['title'] }}
        </div>
        <div @click="changeEtatShow"
            class="cursor-pointer input-tag p-2 outline-none rounded flex justify-between " :class="colorBorder">
            <div class="text-[#00000070]" v-if="selectedOption['name'] == null">{{ placeholder }}</div>
            <div v-else>{{ selectedOption['name'] }}</div>
            <DownIcon width="20px" height="23px" stroke="#a3a3df" />
        </div>
        <div class="relative w-full z-30">
            <ul class="options absolute" v-if="showOptions">
                <li v-for="(option, index) in filteredOptions" :key="index" @click="selectOption(option)">
                    {{ option['name'] }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import DownIcon from '../icons/DownIcon.vue';
import inputMethods from '@/mixin/inputMethods'
export default {
    components: { DownIcon },
    mixins:[inputMethods],
    props: {
        input: {
            require: true
        }

    },
    mounted(){
        if(this.value){
            this.selectedOption=this.value
            this.$emit('changeValue', this.selectedOption)
        }
            
    },
    data() {
        return {
            selectedOption: {},
            showOptions: false,
            selectOptions: this.input['options']
        };
    },
    watch: {
        initData(initData){
            if(initData[this.input['name']])
                this.selectedOption=initData[this.input['name']]
            else
                this.selectedOption={}
            
            this.$emit('changeValue', this.selectedOption)
        },

        clearForm() {
            this.selectedOption = {}
        }
    },
    computed: {
        options() {
            return this.input['options']
        },
        filteredOptions() {
            return this.options.filter((option) =>
                option['name'].toLowerCase()
            )
        },

    },

    methods: {

        selectOption(opt) {

            this.selectedOption = opt;
            this.$emit('changeValue', opt)
            this.showOptions = false;
        },
        changeEtatShow() {
            this.showOptions = !this.showOptions
        }
    },
};
</script>
  
<style>
.input-select {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
}

.tag {
    display: flex;
    align-items: center;
    margin-right: 8px;
    padding: 4px;
    background-color: #eee;
    border-radius: 4px;
    font-size: 14px;
}

.remove-tag {
    margin-left: 4px;
    padding: 0;
    background: none;
    border: none;
    color: #666;
    font-size: 12px;
    cursor: pointer;
}

.input-tag {
    width: 100%;
    font-size: 14px;
}

.options {

    margin-top: 4px;
    padding: 0;
    list-style: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    overflow-y: auto;
    max-height: 200px;
    width: 100%;
}

li {
    padding: 8px;
    cursor: pointer;
}

li:hover {
    background-color: #eee;
}
</style>