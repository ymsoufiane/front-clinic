<template>
    <div class="tag-input-select ">
        <div v-if="selectedTags.length > 0" class="tags">
            <div class="tag" v-for="(tag, index) in selectedTags" :key="index">
                {{ tag['name'] }}
                <button class="remove-tag" @click="removeTag(index)">x</button>
            </div>
        </div>
        <input type="text" :placeholder="placeholder"
            class="input-tag px-4 outline-none rounded py-2 border-[#e4e4f3] border-2" v-model="newTag"
            @focus="changeEtatShow" @keydown.enter="addTag" @keydown.delete="deleteTag" />
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

export default {

    props: {
        options: {
            type: Array,
            required: false,
        },
        placeholder: {
            require: "true"
        },
        value: {
            require: false
        }
    },
    data() {
        return {

            selectedTags: (this.value ? this.value : []),
            newTag: "",
            showOptions: false,
            selectOptions: this.options
        };
    },
    computed: {
        filteredOptions() {
            return this.options.filter((option) =>
                option['name'].toLowerCase().includes(this.newTag.toLowerCase())

            ).filter(item => !this.selectedTags.includes(item));
        },
    },

    methods: {
        addTag() {
            if (this.newTag && !this.selectedTags.includes(this.newTag)) {
                this.selectedTags.push(this.newTag);
                this.$emit('change', this.selectedTags)
                this.newTag = "";
            }
        },
        removeTag(index) {
            this.selectedTags.splice(index, 1);
            this.$emit('change', this.selectedTags)
        },
        deleteTag() {
            if (this.newTag === "") {
                this.removeTag(this.selectedTags.length - 1);
            }
        },
        selectTag(tag) {

            this.selectedTags.push(tag);
            this.$emit('change', this.selectedTags)
            this.newTag = "";
            this.showOptions = false;
        },
        changeEtatShow() {
            this.showOptions = !this.showOptions
        }
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