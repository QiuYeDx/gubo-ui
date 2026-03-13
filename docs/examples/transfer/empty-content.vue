<template>
  <g-transfer v-model="value" :data="data">
    <template #left-empty>
      <g-empty :image-size="60" description="No data" />
    </template>
    <template #right-empty>
      <g-empty :image-size="60" description="No data" />
    </template>
  </g-transfer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface DataItem {
  key: number
  label: string
  disabled: boolean
}
const generateData = (): DataItem[] => {
  const data: DataItem[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref(generateData())
const value = ref([])
</script>
