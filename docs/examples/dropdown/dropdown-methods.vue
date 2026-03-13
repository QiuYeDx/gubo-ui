<template>
  <div style="font-size: 14px">
    <p>open(close) the Dropdown list2 will close(open) the Dropdown List1.</p>
  </div>
  <div style="margin: 15px">
    <g-button @click="showClick">show</g-button>
  </div>
  <g-dropdown ref="dropdown1" trigger="contextmenu" style="margin-right: 30px">
    <span class="g-dropdown-link"> Dropdown List1 </span>
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item>Action 1</g-dropdown-item>
        <g-dropdown-item>Action 2</g-dropdown-item>
        <g-dropdown-item>Action 3</g-dropdown-item>
        <g-dropdown-item disabled>Action 4</g-dropdown-item>
        <g-dropdown-item divided>Action 5</g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-dropdown>

  <g-dropdown trigger="contextmenu" @visible-change="handleVisible2">
    <span class="g-dropdown-link"> Dropdown List2 </span>
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item>Action 1</g-dropdown-item>
        <g-dropdown-item>Action 2</g-dropdown-item>
        <g-dropdown-item>Action 3</g-dropdown-item>
        <g-dropdown-item disabled>Action 4</g-dropdown-item>
        <g-dropdown-item divided>Action 5</g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { DropdownInstance } from 'element-plus'

const dropdown1 = ref<DropdownInstance>()
function handleVisible2(visible: any) {
  if (!dropdown1.value) return
  if (visible) {
    dropdown1.value.handleClose()
  } else {
    dropdown1.value.handleOpen()
  }
}
function showClick() {
  if (!dropdown1.value) return
  dropdown1.value.handleOpen()
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
