<template>
  <button @click="toggleTheme" class="btn">
    <i :class="theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'"></i>
  </button>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"

const theme = ref("light")

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "business" : "light"
  document.documentElement.setAttribute("data-theme", theme.value)
  localStorage.setItem("theme", theme.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem("theme") || "light"
  theme.value = savedTheme
  document.documentElement.setAttribute("data-theme", savedTheme)
})
</script>
