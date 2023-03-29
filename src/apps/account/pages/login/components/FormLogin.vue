<template>
    <div class="grid ">
        <form @submit="login" class="" action="">
            <slot></slot>
           
            <InputForm v-model="username" :err="err.username" @input="e => username = e.target.value" type="text" placeholder="Username">
                <template v-slot:icon>
                    <UserIcon class="w-[20px] fill-[#e4e4f3] inline" />
                </template>

            </InputForm>
            
            <InputForm v-model="password" :err="err.password" type="password" @input="e => password = e.target.value" placeholder="Password">
                <template v-slot:icon>
                    <PasswordIcon class="w-[20px] fill-[#e4e4f3] inline" />
                </template>
            </InputForm>
            <div class="text-[#ef4444] ">
                {{ err.err }}
            </div>
            <div class="text-sm grid grid-cols-2 py-4 font-medium">
                <div class="col-span-1 text-start">
                    <input v-model="isChecked" type="checkbox">
                    <span>
                        Remember me
                    </span>
                </div>
                <div class="col-span-1 text-end">
                    <span class="text-[#717df2]">Forgot password?</span>
                </div>
            </div>
            <SubmitButton type="submit" text="Sign in" />

        </form>
    </div>
</template>
  
<script>

import UserIcon from '@/components/icons/UserIcon.vue';
import InputForm from './InputForm.vue';
import PasswordIcon from '@/components/icons/PasswordIcon.vue';
import SubmitButton from '@/components/buttons/SubmitButton.vue';
import userApi from '@/apps/account/api/user.js';
export default {
    name: 'FormLogin',
    components: { UserIcon, InputForm, PasswordIcon, SubmitButton },
    data() {
        return {
            password: "",
            username: "",
            errPassword:"",
            errUsername:"",
            isChecked: false,
            err:{}
        }
    },
    methods: {
        async login (e) {
            e.preventDefault()
            const user={
                "username":this.username,
                "password":this.password,
                "remember":this.isChecked
            }
            
            this.err=await userApi.login(user)
            
         
        }
    }

}
</script>
  