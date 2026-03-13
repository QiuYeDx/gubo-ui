<template>
  <g-button @click="visible = true">
    Open Drawer with customized header
  </g-button>
  <g-drawer v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
      <g-button type="danger" @click="close">
        <g-icon class="g-icon--left"><CircleCloseFilled /></g-icon>
        Close
      </g-button>
    </template>
    This is drawer content.
  </g-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const visible = ref(false)
</script>
