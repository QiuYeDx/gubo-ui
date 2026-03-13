<template>
  <g-button plain @click="open">Click to open Message Box</g-button>
</template>

<script lang="ts" setup>
import { GMessageBox } from 'element-plus'

const open = () => {
  GMessageBox.alert(
    '<strong>proxy is <i>HTML</i> string</strong>',
    'HTML String',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
</script>
