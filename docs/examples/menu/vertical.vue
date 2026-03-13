<template>
  <g-row class="tac">
    <g-col :span="12">
      <h5 class="mb-2">Default colors</h5>
      <g-menu
        default-active="2"
        class="g-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <g-sub-menu index="1">
          <template #title>
            <g-icon><location /></g-icon>
            <span>Navigator One</span>
          </template>
          <g-menu-item-group title="Group One">
            <g-menu-item index="1-1">item one</g-menu-item>
            <g-menu-item index="1-2">item two</g-menu-item>
          </g-menu-item-group>
          <g-menu-item-group title="Group Two">
            <g-menu-item index="1-3">item three</g-menu-item>
          </g-menu-item-group>
          <g-sub-menu index="1-4">
            <template #title>item four</template>
            <g-menu-item index="1-4-1">item one</g-menu-item>
          </g-sub-menu>
        </g-sub-menu>
        <g-menu-item index="2">
          <g-icon><icon-menu /></g-icon>
          <span>Navigator Two</span>
        </g-menu-item>
        <g-menu-item index="3" disabled>
          <g-icon><document /></g-icon>
          <span>Navigator Three</span>
        </g-menu-item>
        <g-menu-item index="4">
          <g-icon><setting /></g-icon>
          <span>Navigator Four</span>
        </g-menu-item>
      </g-menu>
    </g-col>
    <g-col :span="12">
      <h5 class="mb-2">Custom colors</h5>
      <g-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="g-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <g-sub-menu index="1">
          <template #title>
            <g-icon><location /></g-icon>
            <span>Navigator One</span>
          </template>
          <g-menu-item-group title="Group One">
            <g-menu-item index="1-1">item one</g-menu-item>
            <g-menu-item index="1-2">item two</g-menu-item>
          </g-menu-item-group>
          <g-menu-item-group title="Group Two">
            <g-menu-item index="1-3">item three</g-menu-item>
          </g-menu-item-group>
          <g-sub-menu index="1-4">
            <template #title>item four</template>
            <g-menu-item index="1-4-1">item one</g-menu-item>
          </g-sub-menu>
        </g-sub-menu>
        <g-menu-item index="2">
          <g-icon><icon-menu /></g-icon>
          <span>Navigator Two</span>
        </g-menu-item>
        <g-menu-item index="3" disabled>
          <g-icon><document /></g-icon>
          <span>Navigator Three</span>
        </g-menu-item>
        <g-menu-item index="4">
          <g-icon><setting /></g-icon>
          <span>Navigator Four</span>
        </g-menu-item>
      </g-menu>
    </g-col>
  </g-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
