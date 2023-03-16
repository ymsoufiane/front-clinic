<template  >
    <div v-if="input['type'] == 'tagInput'" class="col-span-full">
        <TagInputSelect @change="handelChange($event, input)" :value="input['value']" :placeholder="input['placeholder']"
            :options="input['options']" />
    </div>
    <div v-else-if="input['type'] == 'select'" class="col-span-full">
        <InputSelect @change="handelChange($event, input)" :value="input['value']" :placeholder="input['placeholder']"
            :options="input['options']" />
    </div>
    <div v-else-if="input['type'] == 'submit'" class="col-span-full grid lg:grid-cols-10 sm:grid-cols-4">
        <div class="submit lg:col-span-4 lg:col-start-4 sm:col-span-2 sm:col-start-2">
            <SubmitButton :text="input['text']" />
        </div>
    </div>

    <InputText @input="handelChange($event.target.value, input)" v-else :input="input">
        <template v-slot:icon>
            <DynamicComponenet width="20px" fill="#c0c0e4" stroke="#e4e4f3" :component="input['icon']" />
        </template>
    </InputText>
</template>

<script>
import InputText from '@/components/inputs/InputText.vue'
import DynamicComponenet from '@/components/DynamicComponenet.vue';
import SubmitButton from '@/components/buttons/SubmitButton.vue';
import TagInputSelect from '@/components/inputs/TagInputSelect.vue'
import InputSelect from './InputSelect.vue';
export default {
    name: 'GenericInput',
    props: ['input'],
    components: { InputText, SubmitButton, TagInputSelect, DynamicComponenet,InputSelect },
    methods: {
        handelChange(value, input) {
            const payload = { input, value }
            this.$emit('change', payload)
        },

    },
}
</script>