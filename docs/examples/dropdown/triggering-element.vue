<template>
  <div class="flex flex-wrap items-center">
    <g-dropdown>
      <g-button type="primary">
        Dropdown List<g-icon class="g-icon--right"><arrow-down /></g-icon>
      </g-button>
      <template #dropdown>
        <g-dropdown-menu>
          <g-dropdown-item>Action 1</g-dropdown-item>
          <g-dropdown-item>Action 2</g-dropdown-item>
          <g-dropdown-item>Action 3</g-dropdown-item>
          <g-dropdown-item>Action 4</g-dropdown-item>
          <g-dropdown-item>Action 5</g-dropdown-item>
        </g-dropdown-menu>
      </template>
    </g-dropdown>
    <g-dropdown split-button type="primary" @click="handleClick">
      Dropdown List
      <template #dropdown>
        <g-dropdown-menu>
          <g-dropdown-item>Action 1</g-dropdown-item>
          <g-dropdown-item>Action 2</g-dropdown-item>
          <g-dropdown-item>Action 3</g-dropdown-item>
          <g-dropdown-item divided>Action 4</g-dropdown-item>
          <g-dropdown-item>Action 5</g-dropdown-item>
        </g-dropdown-menu>
      </template>
    </g-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}
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
