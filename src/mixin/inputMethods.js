const inputMethods={
    props: ['input'],
    computed: {
        placeholder() {
            return this.input['placeholder']
        },
        colorBorder() {
            return this.err != "" && this.err == null ? "border-[#e4e4f3] border-2" : "border-[#ef4444] border-[1px]"
        },
        colorTitle(){
            return this.err != "" && this.err == null ? "text-[#1e293b]":"text-[#ef4444]"
        },

        placeholderColor() {
            return this.err != "" && this.err == null ? "placeholder-[#b6b6d9] text-[#000000de] " : "placeholder-[#ef446cb8] text-[#ef4444]"
        },
        clearForm() {
            return this.$store.getters['form/getClearForm']
        },
        err() {
            return this.$store.getters['form/getErr'][this.input['name']]
        },
        initData() {
            return this.$store.getters['form/getInitData']
        },
        value(){
            return this.initData[this.input['name']]
        }
    },
}
export default inputMethods