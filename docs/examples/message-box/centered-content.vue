<template>
  <g-button plain @click="open">Click to open Message Box</g-button>
</template>

<script lang="ts" setup>
import { GMessage, GMessageBox } from 'element-plus'

const open = () => {
  GMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      center: true,
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
