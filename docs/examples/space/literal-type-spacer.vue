<template>
  <g-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <g-button> button {{ i }} </g-button>
    </div>
  </g-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(10)
</script>
