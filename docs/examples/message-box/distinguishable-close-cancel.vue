<template>
  <g-button plain @click="open">Click to open Message Box</g-button>
</template>

<script lang="ts" setup>
import { GMessage, GMessageBox } from 'element-plus'

import type { Action } from 'element-plus'

const open = () => {
  GMessageBox.confirm(
    'You have unsaved changes, save and proceed?',
    'Confirm',
    {
      distinguishCancelAndClose: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Discard Changes',
    }
  )
    .then(() => {
      GMessage({
        type: 'info',
        message: 'Changes saved. Proceeding to a new route.',
      })
    })
    .catch((action: Action) => {
      GMessage({
        type: 'info',
        message:
          action === 'cancel'
            ? 'Changes discarded. Proceeding to a new route.'
            : 'Stay in the current route',
      })
    })
}
</script>
