<script lang="ts" setup>
import { useCssVar } from '@vueuse/core'
import { useCopyColor } from '../../utils'

const primary = useCssVar('--g-color-primary')
const colorLevel = [3, 5, 7, 8, 9].map((i) => `light-${i}`)
colorLevel.unshift('dark-2')

const { copyColor } = useCopyColor()
</script>

<template>
  <g-row :gutter="12">
    <g-col :span="10" :xs="{ span: 12 }">
      <div class="demo-color-box" :style="{ background: primary }">
        Brand Color
        <div class="value" text="xs">{{ primary.toUpperCase() }}</div>
        <div class="bg-color-sub" :style="{ background: primary }">
          <div
            v-for="level in colorLevel"
            :key="level"
            class="bg-blue-sub-item cursor-pointer hover:shadow"
            :style="{
              width: `${100 / 6}%`,
              background: 'var(--g-color-primary-' + level + ')',
            }"
            @click="copyColor('primary-' + level)"
          />
        </div>
      </div>
    </g-col>
  </g-row>
</template>
