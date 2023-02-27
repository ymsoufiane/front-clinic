<template>
    <div class="home bg-white shadow-sm rounded p-8 text-start">
        <div class="form ">
            <form action="">
                <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-4 ">
                    <InputDashboard type="text" title="Role name">
                        <template v-slot:icon>
                            <UserIcon class="icon-form" />
                        </template>
                    </InputDashboard>
                    <InputDashboard type="text" title="Description">
                        <template v-slot:icon>
                            <UserIcon class="icon-form" />
                        </template>
                    </InputDashboard>
                    <div class="sm:col-span-1 lg:col-span-2">
                        <TagInputSelect placeholder="Select Priviliges" :options="options" />
                    </div>
                    <div class="sm:col-span-1 lg:col-span-2 grid lg:grid-cols-10 sm:grid-cols-4">
                        <div class="submit lg:col-span-4 lg:col-start-4 sm:col-span-2 sm:col-start-2">
                            <SubmitButton text="Add Role" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import InputDashboard from '@/components/inputs/InputDashboard.vue'
import UserIcon from '@/components/icons/UserIcon.vue';
import SubmitButton from '../button/SubmitButton.vue';
import TagInputSelect from '@/components/inputs/TagInputSelect.vue'
export default {

    name: 'FormRole',
    data: function () {
        return {
            options: ['Privilige1', 'Privilige2', 'Privilige3', 'Item1'],
        }
    },
    components: { InputDashboard, UserIcon, SubmitButton, TagInputSelect }
}
</script>
  