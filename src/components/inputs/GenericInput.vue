<template  >

    <div v-if="input['type'] == 'tagInput'" :class="getColSelect">
        <TagInputSelect @changeValue="handelChange($event, input)" :input="input" />
    </div>

    <div v-else-if="input['type'] == 'sectionTitle' " :class="getColSelect">
        <SectionTitle :isFirst="input['isFirst']"  :title="input['title']" />
    </div>

    <div v-else-if="input['type'] == 'select'" :class="getColSelect">
        <InputSelect @changeValue="handelChange($event, input)" :input="input" />
    </div>
    <div v-else-if="input['type'] == 'submit'" class="col-span-full grid lg:grid-cols-10 sm:grid-cols-4">
        <div class="submit lg:col-span-4 lg:col-start-4 sm:col-span-2 sm:col-start-2">
            <SubmitButton :text="input['text']" />
        </div>
    </div>

    <div v-else :class="getCol">
        <InputText @changeValue="handelChange($event.target.value, input)" :input="input">
            <template v-slot:icon>
                <DynamicComponenet width="20px" fill="#c0c0e4" stroke="#e4e4f3" :component="input['icon']" />
            </template>
        </InputText>
    </div>
</template>

<script>
import InputText from '@/components/inputs/InputText.vue'
import DynamicComponenet from '@/components/DynamicComponenet.vue';
import SubmitButton from '@/components/buttons/SubmitButton.vue';
import TagInputSelect from '@/components/inputs/TagInputSelect.vue'
import InputSelect from './InputSelect.vue';
import SectionTitle from '@/components/general/SectionTitle.vue'
export default {
    name: 'GenericInput',
    props: ['input'],
    components: { InputText, SubmitButton, TagInputSelect, DynamicComponenet, InputSelect,SectionTitle },
    computed:{
        getCol(){
            if(this.input['col']) return this.input['col']
            else return ""

        },
        getColSelect(){
            if(this.input['col']) return this.input['col']
            else return "col-span-full"
        }
    },
    methods: {
        
        handelChange(value, input) {
            const payload = { input, value }
            this.$emit('changeValueInput', payload)
        },

    },
}
</script>