<template>
  <g-space direction="vertical">
    <g-space>
      <g-input-number v-model="num" />
      <g-input-number v-model="num">
        <template #decrease-icon>
          <g-icon>
            <ArrowDown />
          </g-icon>
        </template>
        <template #increase-icon>
          <g-icon>
            <ArrowUp />
          </g-icon>
        </template>
      </g-input-number>
    </g-space>
    <g-space>
      <g-input-number v-model="num" controls-position="right" />
      <g-input-number v-model="num" controls-position="right">
        <template #decrease-icon>
          <g-icon>
            <Minus />
          </g-icon>
        </template>
        <template #increase-icon>
          <g-icon>
            <Plus />
          </g-icon>
        </template>
      </g-input-number>
    </g-space>
  </g-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowDown, ArrowUp, Minus, Plus } from '@element-plus/icons-vue'

const num = ref(1)
</script>
