<template>
  <g-button @click="add">Add Item</g-button>
  <g-button @click="onDelete">Delete Item</g-button>
  <g-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </g-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--g-color-primary-light-9);
  color: var(--g-color-primary);
}
</style>
