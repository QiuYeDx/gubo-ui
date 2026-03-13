<template>
  <g-dropdown @command="handleCommand">
    <span class="g-dropdown-link">
      Dropdown List<g-icon class="g-icon--right"><arrow-down /></g-icon>
    </span>
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item command="a">Action 1</g-dropdown-item>
        <g-dropdown-item command="b">Action 2</g-dropdown-item>
        <g-dropdown-item command="c">Action 3</g-dropdown-item>
        <g-dropdown-item command="d" disabled>Action 4</g-dropdown-item>
        <g-dropdown-item command="e" divided>Action 5</g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-dropdown>
</template>

<script lang="ts" setup>
import { GMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

const handleCommand = (command: string | number | object) => {
  GMessage(`click on item ${command}`)
}
</script>

<style scoped>
.example-showcase .g-dropdown-link {
  cursor: pointer;
  color: var(--g-color-primary);
  display: flex;
  align-items: center;
}
</style>
