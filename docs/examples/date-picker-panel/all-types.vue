<template>
  <div>
    <div class="flex gap-4">
      <div class="flex flex-col basis-150px gap-1">
        <span>Type:</span>
        <g-select v-model="type">
          <g-option
            v-for="optionType in types"
            :key="optionType"
            :value="optionType"
          />
        </g-select>
      </div>
    </div>
    <g-divider />
    <div class="flex justify-center">
      <g-date-picker-panel v-model="date" :type="type" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

import type { DatePickerType } from 'element-plus'

const date = ref()
const type = ref<DatePickerType>('date')

watch(type, () => {
  date.value = undefined
})

const types: DatePickerType[] = [
  'year',
  'years',
  'month',
  'months',
  'date',
  'dates',
  'week',
  'datetime',
  'datetimerange',
  'daterange',
  'monthrange',
  'yearrange',
]
</script>
