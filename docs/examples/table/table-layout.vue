<template>
  <g-radio-group v-model="tableLayout" class="mb-2">
    <g-radio-button value="fixed">fixed</g-radio-button>
    <g-radio-button value="auto">auto</g-radio-button>
  </g-radio-group>
  <g-table :data="tableData" :table-layout="tableLayout">
    <g-table-column prop="date" label="Date" />
    <g-table-column prop="name" label="Name" />
    <g-table-column prop="address" label="Address" />
  </g-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TableInstance } from 'element-plus'

const tableLayout = ref<TableInstance['tableLayout']>('fixed')

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
