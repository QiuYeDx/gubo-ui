<template>
  <div class="custom-style">
    <g-segmented v-model="value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Delicacy')

const options = ['Delicacy', 'Desserts&Drinks', 'Fresh foods', 'Supermarket']
</script>

<style scoped>
.custom-style .g-segmented {
  --g-segmented-item-selected-color: var(--g-text-color-primary);
  --g-segmented-item-selected-bg-color: #ffd100;
  --g-border-radius-base: 16px;
}
</style>
