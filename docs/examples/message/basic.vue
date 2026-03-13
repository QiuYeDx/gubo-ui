<template>
  <div class="flex flex-wrap gap-1">
    <g-button class="!ml-0" :plain="true" @click="open">
      Show message
    </g-button>
    <g-button class="!ml-0" :plain="true" @click="openVn">VNode</g-button>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { GMessage } from 'element-plus'

const open = () => {
  GMessage('This is a message.')
}

const openVn = () => {
  GMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>
