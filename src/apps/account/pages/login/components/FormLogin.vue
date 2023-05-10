<template>
    <loading v-if="isLoading" :isLoading="isLoading"></loading>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow-md rounded-md w-full sm:max-w-md p-6">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 mb-6">
          Sign in to your account
        </h2>
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input
              id="username"
              v-model="username"
              type="text"
              required
              class="w-full py-3 px-4 border border-gray-300 outline-0 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-4"
              placeholder="Username"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full py-3 px-4 border border-gray-300 outline-0 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-4"
              placeholder="Password"
            />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                v-model="isChecked"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div class="text-[#ef4444]  ">
                {{ err.err }}
            </div>
          <button
            type="submit"
            class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-indigo-500 shadow-lg focus:outline-none hover:bg-indigo-600 rounded"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
import userApi from '@/apps/account/api/user.js';
import Loading from '@/components/general/Laoding.vue';
  export default {
    components: { Loading },
    data() {
      return {
        username: '',
        password: '',
        isLoading: false,
        isChecked: false,
        err:{}
      };
    },
    methods: {
     async handleSubmit() {
        this.isLoading = true;
            const user = {
                "username": this.username,
                "password": this.password,
                "remember": this.isChecked
            }
            this.err = await userApi.login(user)
            this.isLoading = false
      },
    },
  };
  </script>
  