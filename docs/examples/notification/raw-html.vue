<template>
  <g-button plain @click="open"> Use HTML String </g-button>
</template>

<script lang="ts" setup>
import { GNotification } from 'element-plus'

const open = () => {
  GNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
