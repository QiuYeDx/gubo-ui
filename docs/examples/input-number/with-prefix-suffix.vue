<template>
  <g-space>
    <g-input-number v-model="num" :min="1" :max="10">
      <template #prefix>
        <span>￥</span>
      </template>
    </g-input-number>
    <g-input-number v-model="num" :min="1" :max="10">
      <template #suffix>
        <span>RMB</span>
      </template>
    </g-input-number>
  </g-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>
