<template>
  <div class="flex justify-center">
    <g-date-picker-panel v-model="value" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
</script>
