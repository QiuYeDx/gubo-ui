<template>
  <g-button plain @click="open">Click to open the Message Box</g-button>
</template>

<script lang="ts" setup>
import { GMessage, GMessageBox } from 'element-plus'

import type { Action } from 'element-plus'

const open = () => {
  GMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      GMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>
