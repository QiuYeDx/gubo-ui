<template>
  <div class="demo-progress">
    <g-progress :percentage="50">
      <g-button text>Content</g-button>
    </g-progress>
    <g-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </g-progress>
    <g-progress type="circle" :percentage="100" status="success">
      <g-button type="success" :icon="Check" circle />
    </g-progress>
    <g-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </g-progress>
  </div>
</template>

<script lang="ts" setup>
import { Check } from '@element-plus/icons-vue'
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .g-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .g-progress--circle {
  margin-right: 15px;
}
</style>
