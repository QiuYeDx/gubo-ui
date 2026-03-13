<template>
  <g-tooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
    effect="light"
  >
    <g-button @click="disabled = !disabled">
      click to {{ disabled ? 'active' : 'close' }} tooltip function
    </g-button>
  </g-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const disabled = ref(false)
</script>
