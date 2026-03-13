<template>
  <div>
    <div style="margin-bottom: 15px">
      direction:
      <g-radio v-model="direction" value="horizontal">horizontal</g-radio>
      <g-radio v-model="direction" value="vertical">vertical</g-radio>
    </div>
    <div style="margin-bottom: 15px">
      fillRatio:<g-slider v-model="fillRatio" />
    </div>
    <g-space
      fill
      wrap
      :fill-ratio="fillRatio"
      :direction="direction"
      style="width: 100%"
    >
      <g-card v-for="i in 5" :key="i" class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <g-button class="button" text>Operation button</g-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </g-card>
    </g-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { SpaceInstance } from 'element-plus'

const direction = ref<SpaceInstance['direction']>('horizontal')
const fillRatio = ref(30)
</script>
