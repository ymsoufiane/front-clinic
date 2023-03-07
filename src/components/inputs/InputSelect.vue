<template>
    <div class="input-select ">
        <div @click="changeEtatShow" class="cursor-pointer input-tag px-4 outline-none rounded py-2 border-[#e4e4f3] border-2">
            <div class="text-[#00000070]" v-if="selectedOption['name']==null">{{placeholder}}</div>
            <div v-else>{{selectedOption['name']  }}</div>
        </div>
        <ul class="options" v-if="showOptions">
            <li v-for="(option, index) in filteredOptions"  :key="index" @click="selectTag(option)">
                {{ option['name'] }}
            </li>
        </ul>
    </div>
</template>
  
<script>

export default {

    props: {
        options: {
            type: Array,
            required: false,
        },
        placeholder:{
            require:"true"
        },
        value:{
            require:false
        }
    },
    data() {
        return {
            
            selectedOption: (this.value?this.value:{}),

            showOptions: false,
            selectOptions:this.options
        };
    },
    computed: {
        filteredOptions() {
            return this.options.filter((option) =>
                option['name'].toLowerCase()
                    
            )
        },
    },

    methods: {

        selectTag(opt) {
          
            this.selectedOption=opt;
            this.$emit('change',opt)
            this.showOptions = false;
        },
        changeEtatShow(){
                this.showOptions=!this.showOptions
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