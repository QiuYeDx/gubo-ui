<template>
  <g-button plain @click="visible = true">
    Open Dialog with customized header
  </g-button>

  <g-dialog v-model="visible" :show-close="false" width="500">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <g-button type="danger" @click="close">
          <g-icon class="g-icon--left"><CircleCloseFilled /></g-icon>
          Close
        </g-button>
      </div>
    </template>
    This is dialog content.
  </g-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const visible = ref(false)
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>
