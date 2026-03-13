<template>
  <g-radio-group v-model="size">
    <g-radio value="large">Large</g-radio>
    <g-radio value="default">Default</g-radio>
    <g-radio value="small">Small</g-radio>
  </g-radio-group>

  <g-descriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
    :size="size"
    border
  >
    <g-descriptions-item label="Username">kooriookami</g-descriptions-item>
    <g-descriptions-item label="Telephone">18100000000</g-descriptions-item>
    <g-descriptions-item label="Place" :span="2">Suzhou</g-descriptions-item>
    <g-descriptions-item label="Remarks">
      <g-tag size="small">School</g-tag>
    </g-descriptions-item>
    <g-descriptions-item label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </g-descriptions-item>
  </g-descriptions>

  <g-descriptions
    title="Vertical list without border"
    :column="4"
    :size="size"
    direction="vertical"
    :style="blockMargin"
  >
    <g-descriptions-item label="Username">kooriookami</g-descriptions-item>
    <g-descriptions-item label="Telephone">18100000000</g-descriptions-item>
    <g-descriptions-item label="Place" :span="2">Suzhou</g-descriptions-item>
    <g-descriptions-item label="Remarks">
      <g-tag size="small">School</g-tag>
    </g-descriptions-item>
    <g-descriptions-item label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </g-descriptions-item>
  </g-descriptions>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')

const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
</script>

<style scoped>
.g-descriptions {
  margin-top: 20px;
}
</style>
