<template>
  <g-steps
    class="mb-4"
    style="max-width: 600px"
    :space="200"
    :active="1"
    simple
  >
    <g-step title="Step 1" :icon="Edit" />
    <g-step title="Step 2" :icon="UploadFilled" />
    <g-step title="Step 3" :icon="Picture" />
  </g-steps>

  <g-steps style="max-width: 600px" :active="1" finish-status="success" simple>
    <g-step title="Step 1" />
    <g-step title="Step 2" />
    <g-step title="Step 3" />
  </g-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'
</script>
