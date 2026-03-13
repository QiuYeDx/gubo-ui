<template>
  <g-button
    v-loading.fullscreen.lock="fullscreenLoading"
    type="primary"
    @click="openFullScreen1"
  >
    As a directive
  </g-button>
  <g-button type="primary" @click="openFullScreen2"> As a service </g-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { GLoading } from 'element-plus'

const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}

const openFullScreen2 = () => {
  const loading = GLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
</script>
