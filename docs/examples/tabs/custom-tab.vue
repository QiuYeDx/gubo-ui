<template>
  <g-tabs type="border-card" class="demo-tabs">
    <g-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <g-icon><calendar /></g-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </g-tab-pane>
    <g-tab-pane label="Config">Config</g-tab-pane>
    <g-tab-pane label="Role">Role</g-tab-pane>
    <g-tab-pane label="Task">Task</g-tab-pane>
  </g-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from '@element-plus/icons-vue'
</script>

<style>
.demo-tabs > .g-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .g-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
