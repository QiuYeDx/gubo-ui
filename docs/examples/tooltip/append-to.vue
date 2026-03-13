<template>
  <g-tooltip
    :append-to="targetElement"
    trigger="click"
    content="Append to .target"
    placement="top"
  >
    <g-button class="target">Click to open tooltip</g-button>
  </g-tooltip>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const targetElement = ref('')

onMounted(() => {
  targetElement.value = '.target'
})
</script>

<style scoped>
.target {
  position: relative;
  margin-top: 20px;
}
</style>
