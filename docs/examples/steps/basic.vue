<template>
  <g-steps style="max-width: 600px" :active="active" finish-status="success">
    <g-step title="Step 1" />
    <g-step title="Step 2" />
    <g-step title="Step 3" />
  </g-steps>

  <g-button style="margin-top: 12px" @click="next">Next step</g-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>
