<template>
  <g-radio v-model="radio" disabled value="disabled">Option A</g-radio>
  <g-radio v-model="radio" disabled value="selected and disabled">
    Option B
  </g-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('selected and disabled')
</script>
