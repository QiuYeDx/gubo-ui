<template>
  <g-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <g-button> button {{ i }} </g-button>
    </div>
  </g-space>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { GDivider } from 'element-plus'

const size = ref(10)
const spacer = h(GDivider, { direction: 'vertical' })
</script>
