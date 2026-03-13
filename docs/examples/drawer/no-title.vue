<template>
  <g-button type="primary" @click="drawer = true"> open </g-button>

  <g-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </g-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>
