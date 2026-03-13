<template>
  <g-dropdown :hide-on-click="false">
    <span class="g-dropdown-link">
      Dropdown List<g-icon class="g-icon--right"><arrow-down /></g-icon>
    </span>
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item>Action 1</g-dropdown-item>
        <g-dropdown-item>Action 2</g-dropdown-item>
        <g-dropdown-item>Action 3</g-dropdown-item>
        <g-dropdown-item disabled>Action 4</g-dropdown-item>
        <g-dropdown-item divided>Action 5</g-dropdown-item>
        <g-dropdown-item divided>Action 6</g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style scoped>
.example-showcase .g-dropdown + .g-dropdown {
  margin-left: 15px;
}
.example-showcase .g-dropdown-link {
  cursor: pointer;
  color: var(--g-color-primary);
  display: flex;
  align-items: center;
}
</style>
