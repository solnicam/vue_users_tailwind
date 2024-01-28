<template>
  <header class="p-4 shadow-md w-full">
    <div class="container flex justify-between lg:w-full">
      <img src="@/assets/logo.png" alt="Logo" class="h-10" />
      <DarkMode />
    </div>
  </header>
</template>
<script setup lang="ts">
import DarkMode from "./DarkMode.vue"
</script>
<style>
.container {
  max-width: none !important;
}
</style>
