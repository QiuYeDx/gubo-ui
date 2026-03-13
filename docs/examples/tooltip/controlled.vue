<template>
  <g-tooltip :visible="visible">
    <template #content>
      <span>Content</span>
    </template>
    <g-button @mouseenter="visible = true" @mouseleave="visible = false">
      Hover me
    </g-button>
  </g-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>
