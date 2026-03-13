<template>
  <g-calendar ref="calendar">
    <template #header="{ date }">
      <span>Custom header content</span>
      <span>{{ date }}</span>
      <g-button-group>
        <g-button size="small" @click="selectDate('prev-year')">
          Previous Year
        </g-button>
        <g-button size="small" @click="selectDate('prev-month')">
          Previous Month
        </g-button>
        <g-button size="small" @click="selectDate('today')">Today</g-button>
        <g-button size="small" @click="selectDate('next-month')">
          Next Month
        </g-button>
        <g-button size="small" @click="selectDate('next-year')">
          Next Year
        </g-button>
      </g-button-group>
    </template>
  </g-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { CalendarDateType, CalendarInstance } from 'element-plus'

const calendar = ref<CalendarInstance>()
const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return
  calendar.value.selectDate(val)
}
</script>
