<template>
  <header class="p-4 shadow-md w-full header-container">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo" class="header-logo h-10" />
    </div>
    <DarkMode class="dark-mode-toggle" />
  </header>
</template>

<script setup lang="ts">
import DarkMode from "./DarkMode.vue"
</script>

<style>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-container {
  flex-grow: 1;
  text-align: center;
}
/* Responsive CSS for small screens */
@media (max-width: 768px) {
  .header-container {
    justify-content: center;
  }
  img {
    display: inline !important;
    padding-left: 2rem;
  }
}
</style>
