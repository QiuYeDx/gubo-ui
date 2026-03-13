<template>
  <div class="input-group">
    <g-input
      v-model="input"
      clearable
      :clear-icon="CloseBold"
      placeholder="Custom clear icon"
    />
    <g-input
      v-model="textareaInput"
      clearable
      :clear-icon="CloseBold"
      placeholder="Custom clear icon"
      type="textarea"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CloseBold } from '@element-plus/icons-vue'

const input = ref('Custom clear icon')
const textareaInput = ref('Custom clear icon')
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
