<template>
  <div>
    <g-link :icon="Edit">Edit</g-link>
    <g-link>
      Check<g-icon class="g-icon--right"><icon-view /></g-icon>
    </g-link>
  </div>
</template>

<script setup lang="ts">
import { Edit, View as IconView } from '@element-plus/icons-vue'
</script>

<style scoped>
.g-link {
  margin-right: 8px;
}
</style>
