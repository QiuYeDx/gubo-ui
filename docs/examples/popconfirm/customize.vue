<template>
  <g-popconfirm
    width="220"
    :icon="InfoFilled"
    icon-color="#626AEF"
    title="Are you sure to delete this?"
    @cancel="onCancel"
  >
    <template #reference>
      <g-button>Delete</g-button>
    </template>
    <template #actions="{ confirm, cancel }">
      <g-button size="small" @click="cancel">No!</g-button>
      <g-button
        type="danger"
        size="small"
        :disabled="!clicked"
        @click="confirm"
      >
        Yes?
      </g-button>
    </template>
  </g-popconfirm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'

const clicked = ref(false)
function onCancel() {
  clicked.value = true
}
</script>
