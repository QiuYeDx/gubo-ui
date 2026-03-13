<template>
  <g-row :gutter="16">
    <g-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <g-statistic title="Daily active users" :value="268500" />
    </g-col>
    <g-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <g-statistic :value="138">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio of men to women
            <g-icon style="margin-left: 4px" :size="12">
              <Male />
            </g-icon>
          </div>
        </template>
        <template #suffix>/100</template>
      </g-statistic>
    </g-col>
    <g-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <g-statistic title="Total Transactions" :value="outputValue" />
    </g-col>
    <g-col :xs="24" :sm="12" :md="6" class="text-center mb-4">
      <g-statistic title="Feedback number" :value="562">
        <template #suffix>
          <g-icon style="vertical-align: -0.125em">
            <ChatLineRound />
          </g-icon>
        </template>
      </g-statistic>
    </g-col>
  </g-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { ChatLineRound, Male } from '@element-plus/icons-vue'

const source = ref(0)
const outputValue = useTransition(source, {
  duration: 1500,
})
source.value = 172000
</script>
