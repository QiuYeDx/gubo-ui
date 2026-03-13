<template>
  <g-badge value="new" class="item">
    <g-button>comments</g-button>
  </g-badge>
  <g-badge value="hot" class="item">
    <g-button>replies</g-button>
  </g-badge>
  <g-badge value="99" class="item">
    <g-button>share</g-button>
    <template #content="{ value }">
      <div class="custom-content">
        <g-icon>
          <Message />
        </g-icon>
        <span>{{ value }}</span>
      </div>
    </template>
  </g-badge>
</template>

<script setup lang="ts">
import { Message } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

.custom-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
</style>
