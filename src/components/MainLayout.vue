<template>
  <MainHeader />
  <div class="flex min-h-screen">
    <MainSidebar />
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import MainHeader from "./MainHeader.vue"
import MainSidebar from "./MainSidebar.vue"
</script>
