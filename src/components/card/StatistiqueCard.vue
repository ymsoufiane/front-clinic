<template>
   <div class="w-full px-6 py-2 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
        <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            <div class="p-3  rounded-full " :class="color">
                <slot name="icon"></slot>
            </div>
            <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">{{ value }}</h4>
                <div class="text-gray-500">{{title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StatistiqueCard',
    props: {
        title: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        
        color: {
            type: String,
            required: true,
        },
    },
}



</script>