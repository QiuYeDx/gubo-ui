<template>
  <g-radio-group v-model="mode">
    <g-radio-button label="start" value="start" />
    <g-radio-button label="alternate" value="alternate" />
    <g-radio-button label="alternate-reverse" value="alternate-reverse" />
    <g-radio-button label="end" value="end" />
  </g-radio-group>

  <g-timeline class="mt-4" :mode="mode">
    <g-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </g-timeline-item>
  </g-timeline>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TimelineProps } from 'element-plus'

const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]

const mode = ref<TimelineProps['mode']>('start')
</script>
