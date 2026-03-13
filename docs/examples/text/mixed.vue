<template>
  <g-space direction="vertical">
    <g-text>
      <g-icon>
        <ElementPlus />
      </g-icon>
      Element-Plus
    </g-text>
    <g-row>
      <g-text>Rate</g-text>
      <g-rate class="ml-1" />
    </g-row>
    <g-text>
      This is text mixed icon
      <g-icon>
        <Bell />
      </g-icon>
      and component
      <g-button>Button</g-button>
    </g-text>
  </g-space>
</template>

<script lang="ts" setup>
import { Bell, ElementPlus } from '@element-plus/icons-vue'
</script>
