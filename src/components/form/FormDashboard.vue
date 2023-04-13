<template >
    <div class="home bg-white shadow-sm rounded p-8 text-start">
        <div class="form">
            <form @submit="handleSubmit">
                <div class="grid gap-x-4 " :class="cols">
                    <template v-for="(input, index) in inputs" :key="index">
                        <GenericInput @changeValueInput="handelChange($event)" :input="input" />
                    </template>
                </div>
            </form>
            <AlertComponent :message="messageAlert" :initEtat="showAlert" :type="typeAlert" />
        </div>
    </div>
</template>


<script>

import GenericInput from '@/components/inputs/GenericInput.vue';
import AlertComponent from '@/components/alert/AlertComponent.vue';
import formMethods from '@/mixin/formMethods'
export default {
    name: 'FormDashboard',
    mixins: [formMethods],
    created() {
        if (this.initData) {
            this.formData = this.initData
        }

    },
    props: {
        inputs: {
            type: Array,
            require: true,
        },
        cols: {
            type: String,
            require: false,
            default: "sm:grid-cols-1 lg:grid-cols-2"
        },

    },

    components: { GenericInput, AlertComponent },
    methods: {


    },


}

</script>