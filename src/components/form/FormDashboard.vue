<template >
    <div class="home bg-white shadow-sm rounded p-8 text-start">
        <div class="form">
            <form @submit="handleSubmit">
                <div class="grid gap-x-4 " :class="cols">
                    <template v-for="(input, index) in inputs" :key="index">
                        <GenericInput @changeValueInput="handelChange($event)"  :input="input" />
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

export default {
    name: 'FormDashboard',
    created() {
        if(this.initData)
            this.formData=this.initData
        this.inputs.forEach(input => {
            if (this.initData)
                input['value'] = this.initData[input['name']]
        });

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
        alertInfo: {
            require: false,
        }
    },
    data: function () {
        return {
            formData: {},

        }
    },

    components: { GenericInput, AlertComponent },
    methods: {
        handleSubmit(event) {
            console.log(event)
            event.preventDefault();
            this.$emit('submitForm', this.formData)
        },
        handelChange($event) {
            
            this.formData[$event['input']['name']] = $event['value']
        },

    },
    watch: {
        errForm(newErr) {
            this.inputs.forEach(input => {
                input['err'] = newErr[input['name']]
                input['value'] = this.formData[input['name']]
            });

        },
        clearForm(notClear) {
            if (notClear) {
                this.formData = {}
                this.inputs.forEach(input => {
                    input['value'] = null
                });
                this.$store.commit("form/changeEtat")
            }
        }
    },

    computed: {
        initData() {
            
            return this.$store.getters['form/getInitData']
        },
        errForm() {
            return this.$store.getters['form/getErr']
        },
        showAlert() {
            if (this.alertInfo==null) return null
            return this.alertInfo['showAlert']
        },
        messageAlert() {
            if (this.alertInfo==null) return null
            return this.alertInfo['message']
        },
        typeAlert() {
            if (this.alertInfo==null) return null
            return this.alertInfo['type']
        },
        clearForm() {
            return this.$store.getters['form/getClearForm']
        }

    }
}

</script>