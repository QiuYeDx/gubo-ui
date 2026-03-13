<template>
  <g-button :plain="true" @click="openHTML">Use HTML string</g-button>
</template>

<script lang="ts" setup>
import { GMessage } from 'element-plus'

const openHTML = () => {
  GMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
