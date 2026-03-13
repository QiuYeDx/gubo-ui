<template>
  <g-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <g-radio-button :value="false">expand</g-radio-button>
    <g-radio-button :value="true">collapse</g-radio-button>
  </g-radio-group>
  <g-menu
    default-active="2"
    class="g-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <g-sub-menu index="1">
      <template #title>
        <g-icon><location /></g-icon>
        <span>Navigator One</span>
      </template>
      <g-menu-item-group>
        <template #title><span>Group One</span></template>
        <g-menu-item index="1-1">item one</g-menu-item>
        <g-menu-item index="1-2">item two</g-menu-item>
      </g-menu-item-group>
      <g-menu-item-group title="Group Two">
        <g-menu-item index="1-3">item three</g-menu-item>
      </g-menu-item-group>
      <g-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <g-menu-item index="1-4-1">item one</g-menu-item>
      </g-sub-menu>
    </g-sub-menu>
    <g-menu-item index="2">
      <g-icon><icon-menu /></g-icon>
      <template #title>Navigator Two</template>
    </g-menu-item>
    <g-menu-item index="3" disabled>
      <g-icon><document /></g-icon>
      <template #title>Navigator Three</template>
    </g-menu-item>
    <g-menu-item index="4">
      <g-icon><setting /></g-icon>
      <template #title>Navigator Four</template>
    </g-menu-item>
  </g-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.g-menu-vertical-demo:not(.g-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
