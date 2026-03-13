<template>
  <div class="flex flex-col items-start gap-4">
    <g-segmented v-model="value" :options="options" size="large" />
    <g-segmented v-model="value" :options="options" size="default" />
    <g-segmented v-model="value" :options="options" size="small" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Mon')

const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
</script>
