<template>
    <div class="relative" @click="toggleDropdown">
      <button class="flex items-center justify-center space-x-2 focus:outline-none">
        <img  class="rounded-full w-9" :src="getAvatar" alt="avatar" srcset="">
        <span>{{ username }}</span>
      </button>
      <div
        class="absolute left-0 z-50 py-2 mt-2 bg-white rounded shadow-lg w-48"
        v-show="dropdownOpen"
      >
        <a
          href="#"
          class="block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:text-gray-900"
          @click.prevent="logout"
        >
          Logout
        </a>
        <div class="border-t border-gray-300"></div>
        <a
          href="#"
          class="block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:text-gray-900"
        >
          Account settings
        </a>
      </div>
    </div>
  </template>
  
  <script>


  export default {
    data() {
      return {
        dropdownOpen: false,
        username: "John Doe"
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      logout() {
        // implement your logout logic here
      }
    },
    computed:{
        getAvatar(){
            return window.location.origin+"/avatar.png"
        }
    }
  };
  </script>
  In this example, we use a button to trigger the dropdown menu, and the v-show directive to show or hide the menu depending on the dropdownOpen variable. The logout() method can be implemented to handle the logout logic, and the username variable can be set to the current user's name. The Tailwind CSS classes are used to style the component and the dropdown menu.
  
  
  
  
  
  