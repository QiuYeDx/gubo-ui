<template>
  <g-badge :value="12" class="item">
    <g-button>comments</g-button>
  </g-badge>
  <g-badge :value="3" class="item">
    <g-button>replies</g-button>
  </g-badge>
  <g-badge :value="1" class="item" type="primary">
    <g-button>comments</g-button>
  </g-badge>
  <g-badge :value="2" class="item" type="warning">
    <g-button>replies</g-button>
  </g-badge>
  <g-badge :value="1" class="item" color="green">
    <g-button>custom background</g-button>
  </g-badge>
  <g-dropdown trigger="click">
    <span class="g-dropdown-link">
      Click Me
      <g-icon class="g-icon--right"><caret-bottom /></g-icon>
    </span>
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item class="clearfix">
          comments
          <g-badge class="mark" :value="12" />
        </g-dropdown-item>
        <g-dropdown-item class="clearfix">
          replies
          <g-badge class="mark" :value="3" />
        </g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-dropdown>
</template>

<script lang="ts" setup>
import { CaretBottom } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 30px;
}

.g-dropdown {
  margin-top: 1.1rem;
}
</style>
