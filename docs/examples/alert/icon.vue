<template>
  <div style="max-width: 600px">
    <g-alert title="Primary alert" type="primary" show-icon />
    <g-alert title="Success alert" type="success" show-icon />
    <g-alert title="Info alert" type="info" show-icon />
    <g-alert title="Warning alert" type="warning" show-icon />
    <g-alert title="Error alert" type="error" show-icon />
    <g-alert title="Error alert with custom icon" type="error" show-icon>
      <template #icon>
        <Bell />
      </template>
    </g-alert>
  </div>
</template>

<script lang="ts" setup>
import { Bell } from '@element-plus/icons-vue'
</script>

<style scoped>
.g-alert {
  margin: 20px 0 0;
}
.g-alert:first-child {
  margin: 0;
}
</style>
