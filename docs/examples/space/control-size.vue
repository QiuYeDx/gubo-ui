<template>
  <g-space direction="vertical" alignment="start" :size="30">
    <g-radio-group v-model="size">
      <g-radio value="large">Large</g-radio>
      <g-radio value="default">Default</g-radio>
      <g-radio value="small">Small</g-radio>
    </g-radio-group>

    <g-space wrap :size="size">
      <g-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
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
  </g-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')
</script>
