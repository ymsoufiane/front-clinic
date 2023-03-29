<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <div class="flex-grow flex justify-center items-center">
      <div class="max-w-lg w-full">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-2">Oops!</h1>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Oops! Page not found</h2>
          <p class="text-xl text-gray-500 mb-6">Sorry, we couldn't find the page you were looking for.</p>
          <div class="flex justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="/" class="text-white">Go back to homepage</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-shrink-0">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="flex justify-center items-center">
          <p class="text-sm text-gray-500">&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>
  
<style scoped>
/* No custom styles needed for this component */
</style>
  