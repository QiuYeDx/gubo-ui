<template>
  <g-menu
    :default-active="activeIndex"
    class="g-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
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
    <g-menu-item index="3" disabled>Info</g-menu-item>
    <g-menu-item index="4">Orders</g-menu-item>
  </g-menu>
  <div class="h-6" />
  <g-menu
    :default-active="activeIndex2"
    class="g-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
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
    <g-menu-item index="3" disabled>Info</g-menu-item>
    <g-menu-item index="4">Orders</g-menu-item>
  </g-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
