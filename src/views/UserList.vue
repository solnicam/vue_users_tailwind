<template>
  <MainBreadcrumb :items="breadcrumbItems" />
  <UserList />
</template>

<script setup>
import MainBreadcrumb from "../components/MainBreadcrumb.vue"
import UserList from "../components/UserList.vue"

const breadcrumbItems = [{ text: "Home", to: "/" }, { text: "User list" }]
</script>
