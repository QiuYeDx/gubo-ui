<template>
  <g-input-tag v-model="input" clearable placeholder="Please input">
    <template #prefix>
      <g-icon><ElementPlus /></g-icon>
    </template>
    <template #suffix>
      <g-icon><Search /></g-icon>
    </template>
  </g-input-tag>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElementPlus, Search } from '@element-plus/icons-vue'

const input = ref<string[]>()
</script>
