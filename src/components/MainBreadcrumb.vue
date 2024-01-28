<template>
  <nav aria-label="breadcrumb">
    <ol class="flex list-none p-5">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <router-link
          v-if="item.to"
          :to="item.to"
          class="text-blue-600 hover:text-blue-800"
          >{{ item.text }}</router-link
        >
        <span v-else class="text-gray-500">{{ item.text }}</span>
        <span v-if="index < items.length - 1" class="mx-2 text-gray-500"
          >></span
        >
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { defineProps } from "vue"
// eslint-disable-next-line
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>
