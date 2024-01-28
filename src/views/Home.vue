<template>
  <MainBreadcrumb :items="breadcrumbItems" />
  <div class="p-5">
    <h1>Welcome to the Home Page</h1>
  </div>
</template>

<script setup>
import MainBreadcrumb from "../components/MainBreadcrumb.vue"
const breadcrumbItems = [{ text: "Home", to: "/" }]
</script>
