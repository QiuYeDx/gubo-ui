<template>
  <div class="slider-demo-block">
    <g-slider v-model="value" show-input size="large" />
    <g-slider v-model="value" show-input />
    <g-slider v-model="value" show-input size="small" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<style scoped>
.slider-demo-block {
  max-width: 600px;
}

.g-slider {
  margin-top: 20px;
}

.g-slider:first-child {
  margin-top: 0;
}
</style>
