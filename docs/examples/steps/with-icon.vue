<template>
  <g-steps style="max-width: 600px" :active="1">
    <g-step title="Step 1" :icon="Edit" />
    <g-step title="Step 2" :icon="Upload" />
    <g-step title="Step 3" :icon="Picture" />
  </g-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, Upload } from '@element-plus/icons-vue'
</script>
