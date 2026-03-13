<template>
  <g-button plain @click="open"> Notification with offset </g-button>
</template>

<script lang="ts" setup>
import { GNotification } from 'element-plus'

const open = () => {
  GNotification.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}
</script>
