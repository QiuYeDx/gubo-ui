<template>
  <g-button plain @click="open">Click to open Message Box</g-button>
</template>

<script lang="ts" setup>
import { markRaw } from 'vue'
import { GMessage, GMessageBox } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'

const open = () => {
  GMessageBox.confirm(
    'It will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      icon: markRaw(Delete),
    }
  )
    .then(() => {
      GMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      GMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
