<template>
  <transition name="popup">
    <div
      class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
      v-if="isOpen"
      @click.self="close"
    >
      <div
        class="bg-white rounded-lg p-8 shadow-lg "
        @click.stop
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>

<style>
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s ease;
}
.popup-enter,
.popup-leave-to {
  opacity: 0;
}
</style>
