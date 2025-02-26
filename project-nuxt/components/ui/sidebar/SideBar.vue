<script setup lang="ts">
import { ref } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

// Reactive state
const isSidebarOpen = ref(false)
const isProductsActive = ref(false)
const activeSection = ref('')

// Methods
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const toggleProducts = () => {
  isProductsActive.value = !isProductsActive.value
}

const setActive = (section: string) => {
  activeSection.value = section
}

const isActive = (section: string) => {
  return activeSection.value === section
}
</script>

<template>
  <button @click="toggleSidebar" class="md:hidden fixed p-2 mt-2 ms-3 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>

  <aside :class="['bg-white dark:bg-gray-800 p-4 border-r border-black dark:border-gray-700 transition-transform duration-300 ease-in-out overflow-y-auto', { '-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }]" class="w-64 fixed md:static inset-y-0 left-0 transform md:translate-x-0 custom-scrollbar">
    <h2 class="text-xl font-bold mb-6 text-gray-900 dark:text-white">Inventory Management</h2>
    <ul>
      <li :class="{ 'bg-gray-300 dark:bg-gray-700 border-l-4 border-blue-500': isActive('dashboard') }" class="cursor-pointer p-2 rounded flex items-center transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700">
        <NuxtLink to="/User/Dashboard" class="flex items-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6a4 4 0 00-4 4H5a4 4 0 000-8h8z" />
          </svg>
          Dashboard
        </NuxtLink>
      </li>

      <li @click="toggleProducts" class="cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
        <div :class="{ 'bg-gray-300 dark:bg-gray-700 border-l-4 border-blue-500': isActive('products') }" class="flex justify-between items-center transition-colors duration-200">
          <span class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18M3 3v18M3 3l18 18" />
            </svg>
            Products
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" :class="['w-4 h-4 transition-transform duration-300', { 'rotate-180': isProductsActive }]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </li>

      <li v-if="isProductsActive" :class="{ 'bg-gray-100 dark:bg-gray-600 border-l-4 border-blue-500': isActive('addProduct') }" class="cursor-pointer pl-8 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
        <NuxtLink to="/User/AddProduct">Add Product</NuxtLink>
      </li>

      <li :class="{ 'bg-gray-300 dark:bg-gray-700 border-l-4 border-blue-500': isActive('clients') }" class="cursor-pointer p-2 rounded flex items-center transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700">
        <NuxtLink to="/User/Client" class="flex items-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.121A4 4 0 007 18h10a4 4 0 011.879 1.121M15 12h.01M9 12h.01M12 7h.01M5.121 19.121L19.121 5.121M5.121 19.121h14M19.121 5.121v14" />
          </svg>
          Clients
        </NuxtLink>
      </li>
 
      <li :class="{ 'bg-gray-300 dark:bg-gray-700 border-l-4 border-blue-500': isActive('bills') }" class="cursor-pointer p-2 rounded flex items-center transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700">
        <NuxtLink to="/User/bill" class="flex items-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v13a2 2 0 002 2z" />
          </svg>
          Bills
        </NuxtLink>
      </li>
      
      <li :class="{ 'bg-gray-300 dark:bg-gray-700 border-l-4 border-blue-500': isActive('invoices') }" class="cursor-pointer p-2 rounded flex items-center transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700">
        <NuxtLink to="/User/invoice" class="flex items-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 3h-4.5A2.5 2.5 0 0012 5.5V9a2.5 2.5 0 002.5 2.5H19m2-8.5V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-4M5 11h2m4 0h8m-8 4h6" />
          </svg>
          Invoices
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>


<style scoped>
/* Custom scrollbar styles */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #a0aec0;
}

/* Mobile sidebar styles */
@media (max-width: 768px) {
  aside {
    width: 16rem;
    position: fixed;
    z-index: 40;
    height: 100%;
  }

  main {
    margin-left: 0;
  }
}
</style>
