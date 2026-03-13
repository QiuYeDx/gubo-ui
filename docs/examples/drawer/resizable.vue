<template>
  <g-radio-group v-model="direction" @change="drawer = true">
    <g-radio-button value="ttb">top</g-radio-button>
    <g-radio-button value="rtl">right</g-radio-button>
    <g-radio-button value="btt">bottom</g-radio-button>
    <g-radio-button value="ltr">left</g-radio-button>
  </g-radio-group>

  <g-drawer v-model="drawer" :direction="direction" resizable>
    This is drawer content.
  </g-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { DrawerProps } from 'element-plus'

const direction = ref<DrawerProps['direction']>()
const drawer = ref(false)
</script>
