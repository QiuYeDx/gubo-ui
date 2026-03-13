<template>
  <g-button-group class="mb-4">
    <g-button type="primary" :icon="ArrowLeft">Previous Page</g-button>
    <g-button type="primary">
      Next Page<g-icon class="g-icon--right"><ArrowRight /></g-icon>
    </g-button>
  </g-button-group>
  <br />
  <g-radio-group v-model="direction" class="mb-2">
    <g-radio value="horizontal">Horizontal</g-radio>
    <g-radio value="vertical">Vertical</g-radio>
  </g-radio-group>
  <br />

  <g-button-group :direction="direction">
    <g-button type="primary" :icon="House" />
    <g-button type="primary" :icon="Operation" />
    <g-button type="primary" :icon="Notification" />
  </g-button-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowLeft,
  ArrowRight,
  House,
  Notification,
  Operation,
} from '@element-plus/icons-vue'

const direction = ref<'horizontal' | 'vertical'>('horizontal')
</script>
