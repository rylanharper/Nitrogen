<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

// Stores
const cartStore = useCartStore();

// Computed
const cartTotalItems = computed(() => cartStore.lineItemsCount);

// Emits
const emit = defineEmits([
  'toggleShopMenu',
  'toggleSearchMenu',
  'toggleCartDrawer'
]);
</script>

<template>
  <nav class="grid grid-cols-[1fr_max-content_1fr] gap-4 min-h-[--header-height] px-4 lg:hidden">
    <div class="grid grid-flow-col justify-start items-center">
      <button
        @click="$emit('toggleShopMenu')"
        class="flex p-2 text-normalize bg-transparent rounded-full"
      >
        Menu
      </button>
    </div>
    <div class="flex items-center">
      <NuxtLink to="/" id="logo" class="p-2 bg-transparent rounded-full">
        Nitrogen
      </NuxtLink>
    </div>
    <div class="grid grid-flow-col justify-end items-center">
      <button
        @click="$emit('toggleSearchMenu')"
        class="flex p-2 text-normalize bg-transparent rounded-full"
      >
        <Icon name="ph:magnifying-glass" class="h-5 w-5 shrink-0" />
      </button>
      <button
        @click="$emit('toggleCartDrawer')"
        class="flex p-2 text-normalize bg-transparent rounded-full"
      >
        Cart ({{ cartTotalItems }})
      </button>
    </div>
  </nav>
</template>
