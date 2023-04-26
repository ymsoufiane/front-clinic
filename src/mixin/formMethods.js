const formMethods={
    props:{
        alertInfo: {
            require: false,
        }
    },
    data: function () {
        return {
            formData: {},

        }
    },
    methods:{
        handleSubmit(event) {
            event.preventDefault();
            this.$emit('submitForm', this.formData)
        },
        handelChange($event) {

            if ($event['input']['type'] == 'select') {
                if($event['value'])
                    this.formData[$event['input']['name']] = $event['value']['value']
            }
            else
                this.formData[$event['input']['name']] = $event['value']

            this.$emit('changeForm', this.formData)

        },
    },
    computed: {
        initData() {
            return this.$store.getters['form/getInitData']
        },
        errForm() {
            return this.$store.getters['form/getErr']
        },
        showAlert() {
            if (this.alertInfo == null) return null
            return this.alertInfo['showAlert']
        },
        messageAlert() {
            if (this.alertInfo == null) return null
            return this.alertInfo['message']
        },
        typeAlert() {
            if (this.alertInfo == null) return null
            return this.alertInfo['type']
        },
        clearForm() {
            return this.$store.getters['form/getClearForm']
        }

    },
    watch: {
        initData(newValue) {
            this.formData = newValue
        },
    },
}
export default formMethods