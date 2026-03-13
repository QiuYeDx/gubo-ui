<template>
  <div class="demo-progress">
    <g-progress :percentage="50" :stroke-width="15" striped />
    <g-progress
      :percentage="30"
      :stroke-width="15"
      status="warning"
      striped
      striped-flow
    />
    <g-progress
      :percentage="100"
      :stroke-width="15"
      status="success"
      striped
      striped-flow
      :duration="10"
    />
    <g-progress
      :percentage="percentage"
      :stroke-width="15"
      status="exception"
      striped
      striped-flow
      :duration="duration"
    />
    <g-button-group>
      <g-button :icon="Minus" @click="decrease" />
      <g-button :icon="Plus" @click="increase" />
    </g-button-group>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Minus, Plus } from '@element-plus/icons-vue'

const percentage = ref<number>(70)
const duration = computed(() => Math.floor(percentage.value / 10))

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
</script>

<style scoped>
.demo-progress .g-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
