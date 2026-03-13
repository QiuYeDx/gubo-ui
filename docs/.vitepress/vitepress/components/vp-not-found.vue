<script setup lang="ts">
import { computed } from 'vue'
import { isClient } from '@vueuse/core'
import { useLang } from '../composables/lang'
import localeData from '../../i18n/pages/not-found.json'

const lang = useLang()

const locale = computed(() => localeData[lang.value])

const goHome = () => {
  if (!isClient) return
  window.location.href = `/${lang.value}/`
}
</script>

<template>
  <g-result icon="error" :title="locale.title" :sub-title="locale.desc">
    <template #extra>
      <g-button @click="goHome">{{ locale['button-title'] }}</g-button>
    </template>
  </g-result>
</template>

<style scoped>
.g-result {
  height: 100vh;
  width: 100vw;
}
</style>
