<template>
  <g-badge is-dot class="item">query</g-badge>
  <g-badge is-dot class="item">
    <g-button class="share-button" :icon="Share" type="primary" />
  </g-badge>
</template>

<script lang="ts" setup>
import { Share } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
