<template>
  <g-button plain @click="open"> Hide close button </g-button>
</template>

<script lang="ts" setup>
import { GNotification } from 'element-plus'

const open = () => {
  GNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>
