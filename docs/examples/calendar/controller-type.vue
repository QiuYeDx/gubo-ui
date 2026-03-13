<template>
  <g-radio-group v-model="controllerType">
    <g-radio-button label="select" value="select" />
    <g-radio-button label="button" value="button" />
  </g-radio-group>

  <g-calendar v-model="value" :controller-type="controllerType" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const controllerType = ref<'select' | 'button'>('select')
const value = ref(new Date())
</script>
