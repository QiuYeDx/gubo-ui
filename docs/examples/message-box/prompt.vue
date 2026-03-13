<template>
  <g-button plain @click="open">Click to open Message Box</g-button>
</template>

<script lang="ts" setup>
import { GMessage, GMessageBox } from 'element-plus'

const open = () => {
  GMessageBox.prompt('Please input your e-mail', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: 'Invalid Email',
  })
    .then(({ value }) => {
      GMessage({
        type: 'success',
        message: `Your email is:${value}`,
      })
    })
    .catch(() => {
      GMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}
</script>
