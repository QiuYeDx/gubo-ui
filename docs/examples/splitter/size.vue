<template>
  <div
    style="height: 250px; box-shadow: var(--g-border-color-light) 0px 0px 10px"
  >
    <g-splitter
      @resize-start="handleResizeStart"
      @resize-end="handleResizeEnd"
      @resize="handleResize"
    >
      <g-splitter-panel>
        <div class="demo-panel">1</div>
      </g-splitter-panel>
      <g-splitter-panel v-model:size="size" :max="200" :min="50">
        <div class="demo-panel">{{ size }}px</div>
      </g-splitter-panel>
      <g-splitter-panel>
        <div class="demo-panel">3</div>
      </g-splitter-panel>
    </g-splitter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const size = ref(100)

const handleResizeStart = (index: number, sizes: number[]) => {
  console.log('resizeStart', index, sizes)
}

const handleResize = (index: number, sizes: number[]) => {
  console.log('resize', index, sizes)
}

const handleResizeEnd = (index: number, sizes: number[]) => {
  console.log('resizeEnd', index, sizes)
}
</script>

<style scoped>
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
