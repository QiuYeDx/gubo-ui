<template>
  <div>
    <g-config-provider :message="config">
      <g-button @click="open">OPEN</g-button>
    </g-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { GMessage } from 'element-plus'

const config = reactive({
  max: 3,
  plain: true,
  placement: 'bottom',
})

const open = () => {
  GMessage('This is a message from bottom.')
}
</script>
