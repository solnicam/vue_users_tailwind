<template>
  <MainHeader />
  <div class="flex flex-col md:flex-row min-h-screen">
    <MainSidebar :isVisible="showSidebar" class="md:block" />
    <button class="btn toggle-button md:hidden" @click="toggleSidebar">
      <i v-if="showSidebar" class="fas fa-times"></i>
      <i v-else class="fas fa-bars"></i>
    </button>
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import MainHeader from "./MainHeader.vue"
import MainSidebar from "./MainSidebar.vue"

const showSidebar = ref(window.innerWidth > 768)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}
</script>

<style>
.toggle-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1050;
}
</style>
