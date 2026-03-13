<template>
  <g-radio-group v-model="radio">
    <g-radio :value="3">Option A</g-radio>
    <g-radio :value="6">Option B</g-radio>
    <g-radio :value="9">Option C</g-radio>
  </g-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
</script>
