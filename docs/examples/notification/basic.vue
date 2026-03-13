<template>
  <div class="flex flex-wrap gap-1">
    <g-button class="!ml-0" plain @click="open1">
      Closes automatically
    </g-button>
    <g-button class="!ml-0" plain @click="open2">
      Won't close automatically
    </g-button>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { GNotification } from 'element-plus'

const open1 = () => {
  GNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

const open2 = () => {
  GNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  })
}
</script>
