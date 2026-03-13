<template>
  <div class="flex flex-wrap items-center mb-4">
    <g-button size="large">Large</g-button>
    <g-button>Default</g-button>
    <g-button size="small">Small</g-button>
    <g-button size="large" :icon="Search">Search</g-button>
    <g-button :icon="Search">Search</g-button>
    <g-button size="small" :icon="Search">Search</g-button>
  </div>
  <div class="flex flex-wrap items-center mb-4">
    <g-button size="large" round>Large</g-button>
    <g-button round>Default</g-button>
    <g-button size="small" round>Small</g-button>
    <g-button size="large" :icon="Search" round>Search</g-button>
    <g-button :icon="Search" round>Search</g-button>
    <g-button size="small" :icon="Search" round>Search</g-button>
  </div>
  <div class="flex flex-wrap items-center">
    <g-button :icon="Search" size="large" circle />
    <g-button :icon="Search" circle />
    <g-button :icon="Search" size="small" circle />
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>
