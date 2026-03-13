<template>
  <g-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <g-tab-pane label="User" name="first">User</g-tab-pane>
    <g-tab-pane label="Config" name="second">Config</g-tab-pane>
    <g-tab-pane label="Role" name="third">Role</g-tab-pane>
    <g-tab-pane label="Task" name="fourth">Task</g-tab-pane>
  </g-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style>
.demo-tabs > .g-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
