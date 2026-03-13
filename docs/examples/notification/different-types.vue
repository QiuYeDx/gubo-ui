<template>
  <div class="flex flex-wrap gap-1">
    <g-button class="!ml-0" plain @click="open5">Primary</g-button>
    <g-button class="!ml-0" plain @click="open1">Success</g-button>
    <g-button class="!ml-0" plain @click="open2">Warning</g-button>
    <g-button class="!ml-0" plain @click="open3">Info</g-button>
    <g-button class="!ml-0" plain @click="open4">Error</g-button>
  </div>
</template>

<script lang="ts" setup>
import { GNotification } from 'element-plus'

const open1 = () => {
  GNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  GNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  GNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  GNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}

const open5 = () => {
  GNotification({
    title: 'Primary',
    message: 'This is a primary message',
    type: 'primary',
  })
}
</script>
