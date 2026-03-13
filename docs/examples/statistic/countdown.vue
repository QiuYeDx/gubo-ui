<template>
  <g-row :gutter="16">
    <g-col :xs="24" :sm="12" :md="8" class="text-center mb-4">
      <g-countdown title="Start to grab" :value="value" />
    </g-col>
    <g-col :xs="24" :sm="12" :md="8" class="text-center mb-4">
      <g-countdown
        title="Remaining VIP time"
        format="HH:mm:ss"
        :value="value1"
      />
      <g-button class="countdown-footer" type="primary" @click="reset">
        Reset
      </g-button>
    </g-col>
    <g-col :xs="24" :sm="12" :md="8" class="text-center mb-4">
      <g-countdown format="DD [days] HH:mm:ss" :value="value2">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            <g-icon style="margin-right: 4px" :size="12">
              <Calendar />
            </g-icon>
            Still to go until next month
          </div>
        </template>
      </g-countdown>
      <div class="countdown-footer">{{ value2.format('YYYY-MM-DD') }}</div>
    </g-col>
  </g-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { Calendar } from '@element-plus/icons-vue'

const value = ref(Date.now() + 1000 * 60 * 60 * 7)
const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
const value2 = ref(dayjs().add(1, 'month').startOf('month'))

function reset() {
  value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2
}
</script>

<style scoped>
.countdown-footer {
  margin-top: 8px;
}
</style>
