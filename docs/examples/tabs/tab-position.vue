<template>
  <g-radio-group v-model="tabPosition" style="margin-bottom: 30px">
    <g-radio-button value="top">top</g-radio-button>
    <g-radio-button value="right">right</g-radio-button>
    <g-radio-button value="bottom">bottom</g-radio-button>
    <g-radio-button value="left">left</g-radio-button>
  </g-radio-group>

  <g-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <g-tab-pane label="User">User</g-tab-pane>
    <g-tab-pane label="Config">Config</g-tab-pane>
    <g-tab-pane label="Role">Role</g-tab-pane>
    <g-tab-pane label="Task">Task</g-tab-pane>
  </g-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TabsInstance } from 'element-plus'

const tabPosition = ref<TabsInstance['tabPosition']>('left')
</script>

<style>
.demo-tabs > .g-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.g-tabs--right .g-tabs__content,
.g-tabs--left .g-tabs__content {
  height: 100%;
}
</style>
