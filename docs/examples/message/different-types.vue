<template>
  <div class="flex flex-wrap gap-1">
    <g-button class="!ml-0" :plain="true" @click="open5">Primary</g-button>
    <g-button class="!ml-0" :plain="true" @click="open2">Success</g-button>
    <g-button class="!ml-0" :plain="true" @click="open3">Warning</g-button>
    <g-button class="!ml-0" :plain="true" @click="open1">Info</g-button>
    <g-button class="!ml-0" :plain="true" @click="open4">Error</g-button>
  </div>
</template>

<script lang="ts" setup>
import { GMessage } from 'element-plus'

const open1 = () => {
  GMessage('This is a info message.')
}
const open2 = () => {
  GMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  GMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  GMessage.error('Oops, this is a error message.')
}
const open5 = () => {
  GMessage.primary('This is a primary message.')
}
</script>
