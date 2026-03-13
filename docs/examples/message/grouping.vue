<template>
  <g-button :plain="true" @click="open">Show message</g-button>
</template>

<script lang="ts" setup>
import { GMessage } from 'element-plus'

const open = () => {
  GMessage({
    message: 'This is a message.',
    grouping: true,
    type: 'success',
  })
}
</script>
