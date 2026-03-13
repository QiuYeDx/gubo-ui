<template>
  <g-radio-group v-model="size">
    <g-radio value="large">Large</g-radio>
    <g-radio value="default">Default</g-radio>
    <g-radio value="small">Small</g-radio>
  </g-radio-group>

  <g-descriptions
    class="margin-top"
    title="With border"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
      <g-button type="primary">Operation</g-button>
    </template>
    <g-descriptions-item>
      <template #label>
        <div class="cell-item">
          <g-icon :style="iconStyle">
            <user />
          </g-icon>
          Username
        </div>
      </template>
      kooriookami
    </g-descriptions-item>
    <g-descriptions-item>
      <template #label>
        <div class="cell-item">
          <g-icon :style="iconStyle">
            <iphone />
          </g-icon>
          Telephone
        </div>
      </template>
      18100000000
    </g-descriptions-item>
    <g-descriptions-item>
      <template #label>
        <div class="cell-item">
          <g-icon :style="iconStyle">
            <location />
          </g-icon>
          Place
        </div>
      </template>
      Suzhou
    </g-descriptions-item>
    <g-descriptions-item>
      <template #label>
        <div class="cell-item">
          <g-icon :style="iconStyle">
            <tickets />
          </g-icon>
          Remarks
        </div>
      </template>
      <g-tag size="small">School</g-tag>
    </g-descriptions-item>
    <g-descriptions-item>
      <template #label>
        <div class="cell-item">
          <g-icon :style="iconStyle">
            <office-building />
          </g-icon>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </g-descriptions-item>
  </g-descriptions>

  <g-descriptions
    class="margin-top"
    title="Without border"
    :column="3"
    :size="size"
    :style="blockMargin"
  >
    <template #extra>
      <g-button type="primary">Operation</g-button>
    </template>
    <g-descriptions-item label="Username">kooriookami</g-descriptions-item>
    <g-descriptions-item label="Telephone">18100000000</g-descriptions-item>
    <g-descriptions-item label="Place">Suzhou</g-descriptions-item>
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
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'

import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')

const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
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
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>
