<script lang="ts" setup>
import { reactive } from 'vue'

import type { CardConfigContext } from 'element-plus'

const config = reactive<CardConfigContext>({
  shadow: 'always',
})
</script>

<template>
  Shadow:
  <div class="flex flex-col justify-center">
    <g-radio-group v-model="config.shadow">
      <g-radio value="always">always</g-radio>
      <g-radio value="hover">hover</g-radio>
      <g-radio value="never">never</g-radio>
    </g-radio-group>
    <g-divider />
    <g-config-provider :card="config">
      <g-card>Card desu!</g-card>
    </g-config-provider>
  </div>
</template>
