<template>
    <div class="grid grid-cols-2">
        <div class="col-span-1 grid grid-cols-7  h-screen content-center pt-8  bg-slate-50">
            <div class=" col-span-5 col-start-3 ">
                
                <FormLogin class="w-8/12">
                    <FormTitle title="Sign in" />
                </FormLogin>
            </div>
        </div>
        <div class="col-span-1">
            <img class="h-full" src="/login-image.jpg" alt="" srcset="">
        </div>
        
    </div>
</template>
  
<script>

import FormTitle from "./components/FormTitle.vue";
import FormLogin from "./components/FormLogin.vue"
export default {
    name: 'LoginPage',
    components:{FormTitle,FormLogin}
}
</script>
  