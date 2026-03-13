<template>
  <div class="flex flex-wrap items-center gap-4">
    <g-input-number
      v-model="num"
      :min="1"
      :max="10"
      controls-position="right"
      size="large"
      @change="handleChange"
    />
    <g-input-number
      v-model="num"
      :min="1"
      :max="10"
      controls-position="right"
      @change="handleChange"
    />
    <g-input-number
      v-model="num"
      :min="1"
      :max="10"
      size="small"
      controls-position="right"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number | undefined) => {
  console.log(value)
}
</script>
