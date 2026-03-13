<template>
  <div>
    <g-button type="primary" :icon="Edit" />
    <g-button type="primary" :icon="Share" />
    <g-button type="primary" :icon="Delete" />
    <g-button type="primary" :icon="Search">Search</g-button>
    <g-button type="primary">
      Upload<g-icon class="g-icon--right"><Upload /></g-icon>
    </g-button>
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
</script>
