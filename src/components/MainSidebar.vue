<template>
  <aside class="w-48 md:w-64 bg-gray-100 p-4 dark:bg-gray-800">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-2">
        <li>
          <router-link
            to="/"
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3">Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/users"
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3">Users</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
