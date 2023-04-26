<template>
    <div class="tag-input-select py-2">
        <div class="title py  text-sm" :class="colorTitle">
            {{ input['title'] }}
        </div>
        <div v-if="selectedTags.length > 0" class="tags">
            <div class="tag" v-for="(tag, index) in selectedTags" :key="index">
                {{ tag['name'] }}
                <span class="remove-tag" @click="removeTag(index)">x</span>
            </div>
        </div>
        <input type="text" :placeholder="placeholder"
            class="input-tag px-4 outline-none rounded py-2 border-[#e4e4f3] border-2" v-model="newTag"
            @focus="changeEtatShow" @keydown.delete="deleteTag" />
        <div class="relative w-full z-30">
            <ul class="options absolute" v-if="showOptions">
                <li v-for="(option, index) in filteredOptions" :key="index" @click="selectTag(option)">
                    {{ option['name'] }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import inputMethods from '@/mixin/inputMethods'
export default {
    mixins: [inputMethods],
    mounted(){
        if(this.value){
           this.selectedTags=this.value 
           this.updateValues()
        }
            
    },
    data() {
        return {
            selectedTags: [],
            values: [],
            newTag: "",
            showOptions: false,
            selectOptions: this.input['options']
        };
    },
    watch: {
        initData(initData) {
            if (initData[this.input['name']])
                this.selectedTags = initData[this.input['name']]
            else
                this.selectedTags = []

            this.updateValues() 
        },
        clearForm() {
            this.selectedTags = []
            this.values = []
        }
    },
    computed: {

        options() {
            return this.input['options']
        },
        clearForm() {
            return this.$store.getters['form/getClearForm']
        },

        filteredOptions() {
            return this.options.filter((option) =>
                option['name'].toLowerCase().includes(this.newTag.toLowerCase())

            ).filter(item => !this.selectedTags.includes(item));
        },
    },

    methods: {
        updateValues() {
            this.selectedTags.forEach((item) => {
                this.values.push(item['value'])
            })
            if (this.selectedTags.length > 0)
                this.$emit('changeValue', this.values)
        },
        removeTag(index) {

            this.selectedTags.splice(index, 1);
            this.values.splice(index, 1)
            this.$emit('changeValue', this.values)
        },
        deleteTag() {
            if (this.newTag === "") {
                this.removeTag(this.selectedTags.length - 1);
            }
        },
        selectTag(tag) {
            this.selectedTags.push(tag);
            this.values.push(tag['value'])
            this.$emit('changeValue', this.values)
            this.newTag = "";
            this.showOptions = false;
        },
        changeEtatShow() {
            this.showOptions = !this.showOptions
        },

    },
};
</script>
  
<style>
.tag-input-select {
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