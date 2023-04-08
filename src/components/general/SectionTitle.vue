<template>
    <div v-if="isFirst">
        <div class=" pb-2 text-2xl ">
            {{ title }}
        </div>
    </div>
    <div v-else class="pt-8">
        <hr>
        <div class="pt-3 pb-2 text-2xl ">
            {{ title }}
        </div>
    </div>
</template>

<script>

export default {
    name: 'SectionTitle',
    props: {
        title: {
            require: true,
            type: String
        },
        isFirst: {
            require: false,
            type: Boolean,
            default: false
        }
    },

    methods: {

    },
    computed: {

    }
}
</script>