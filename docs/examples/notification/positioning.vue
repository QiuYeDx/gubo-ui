<template>
  <div class="flex flex-wrap gap-1">
    <g-button class="!ml-0" plain @click="open1"> Top Right </g-button>
    <g-button class="!ml-0" plain @click="open2"> Bottom Right </g-button>
    <g-button class="!ml-0" plain @click="open3"> Bottom Left </g-button>
    <g-button class="!ml-0" plain @click="open4"> Top Left </g-button>
  </div>
</template>

<script lang="ts" setup>
import { GNotification } from 'element-plus'

const open1 = () => {
  GNotification({
    title: 'Custom Position',
    message: "I'm at the top right corner",
  })
}

const open2 = () => {
  GNotification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right',
  })
}

const open3 = () => {
  GNotification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left',
  })
}

const open4 = () => {
  GNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left',
  })
}
</script>
