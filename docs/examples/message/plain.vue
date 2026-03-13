<template>
  <div class="flex flex-wrap gap-1">
    <g-button class="!ml-0" :plain="true" @click="open5">Primary</g-button>
    <g-button class="!ml-0" :plain="true" @click="open1">Success</g-button>
    <g-button class="!ml-0" :plain="true" @click="open2">Warning</g-button>
    <g-button class="!ml-0" :plain="true" @click="open3">Info</g-button>
    <g-button class="!ml-0" :plain="true" @click="open4">Error</g-button>
  </div>
</template>

<script lang="ts" setup>
import { GMessage } from 'element-plus'

const open1 = () => {
  GMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    plain: true,
  })
}
const open2 = () => {
  GMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
    plain: true,
  })
}
const open3 = () => {
  GMessage({
    message: 'This is a info message.',
    type: 'info',
    plain: true,
  })
}
const open4 = () => {
  GMessage({
    message: 'Oops, this is a error message.',
    type: 'error',
    plain: true,
  })
}
const open5 = () => {
  GMessage({
    message: 'This is a primary message.',
    type: 'primary',
    plain: true,
  })
}
</script>
