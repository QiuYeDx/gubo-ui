<template>
  <g-menu
    :default-active="activeIndex"
    class="g-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <g-menu-item index="0">
      <img
        style="width: 100px"
        src="/images/element-plus-logo.svg"
        alt="Element logo"
      />
    </g-menu-item>
    <g-menu-item index="1">Processing Center</g-menu-item>
    <g-sub-menu index="2">
      <template #title>Workspace</template>
      <g-menu-item index="2-1">item one</g-menu-item>
      <g-menu-item index="2-2">item two</g-menu-item>
      <g-menu-item index="2-3">item three</g-menu-item>
      <g-sub-menu index="2-4">
        <template #title>item four</template>
        <g-menu-item index="2-4-1">item one</g-menu-item>
        <g-menu-item index="2-4-2">item two</g-menu-item>
        <g-menu-item index="2-4-3">item three</g-menu-item>
      </g-sub-menu>
    </g-sub-menu>
  </g-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.g-menu--horizontal > .g-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
