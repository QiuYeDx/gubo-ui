<template>
  <div class="flex flex-wrap gap-1">
    <g-button class="!ml-0" plain @click="open">
      Open a draggable Message Box
    </g-button>
    <g-button class="!ml-0" plain @click="open2">
      Open a overflow draggable Message Box
    </g-button>
    <g-button class="!ml-0" plain @click="open3">
      Open a custom dragging style Message Box
    </g-button>
  </div>
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
      draggable: true,
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

const open2 = () => {
  GMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      draggable: true,
      overflow: true,
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

const open3 = () => {
  GMessageBox.confirm(
    'This message box has custom dragging styles. Try dragging it to see the effects!',
    'Custom Dragging Style',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'info',
      draggable: true,
      customClass: 'custom-dragging-message-box',
    }
  )
    .then(() => {
      GMessage({
        type: 'success',
        message: 'Action completed',
      })
    })
    .catch(() => {
      GMessage({
        type: 'info',
        message: 'Action canceled',
      })
    })
}
</script>

<style>
.custom-dragging-message-box.is-dragging {
  border: 2px dashed var(--g-color-primary);
  opacity: 0.65;
}
</style>
