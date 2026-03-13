<script setup lang="ts">
import { reactive, watch } from 'vue'
import { isDark } from '~/composables/dark'

const config = reactive({
  content: 'Element Plus',
  font: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.15)',
  },
  zIndex: -1,
  rotate: -22,
  gap: [100, 100] as [number, number],
  offset: [] as unknown as [number, number],
})

watch(
  isDark,
  (value) => {
    config.font.color = value
      ? 'rgba(255, 255, 255, .15)'
      : 'rgba(0, 0, 0, .15)'
  },
  { immediate: true }
)
</script>

<template>
  <div class="wrapper">
    <g-watermark
      class="watermark"
      :content="config.content"
      :font="config.font"
      :z-index="config.zIndex"
      :rotate="config.rotate"
      :gap="config.gap"
      :offset="config.offset"
    >
      <div class="watermark-container">
        <h1>Element Plus</h1>
        <h2>A Vue 3 based component library for designers and developers</h2>
        <img src="/images/hamburger.png" alt="示例图片" />
      </div>
    </g-watermark>
    <g-form
      class="form"
      :model="config"
      label-position="top"
      label-width="50px"
    >
      <g-form-item label="Content">
        <g-input v-model="config.content" />
      </g-form-item>
      <g-form-item label="Color">
        <g-color-picker v-model="config.font.color" show-alpha />
      </g-form-item>
      <g-form-item label="FontSize">
        <g-slider v-model="config.font.fontSize" />
      </g-form-item>
      <g-form-item label="zIndex">
        <g-slider v-model="config.zIndex" />
      </g-form-item>
      <g-form-item label="Rotate">
        <g-slider v-model="config.rotate" :min="-180" :max="180" />
      </g-form-item>
      <g-form-item label="Gap">
        <g-space>
          <g-input-number v-model="config.gap[0]" controls-position="right" />
          <g-input-number v-model="config.gap[1]" controls-position="right" />
        </g-space>
      </g-form-item>
      <g-form-item label="Offset">
        <g-space>
          <g-input-number
            v-model="config.offset[0]"
            placeholder="offsetLeft"
            controls-position="right"
          />
          <g-input-number
            v-model="config.offset[1]"
            placeholder="offsetTop"
            controls-position="right"
          />
        </g-space>
      </g-form-item>
    </g-form>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}
.watermark {
  display: flex;
  flex: auto;
}
.watermark-container {
  flex: auto;
}
.form {
  width: 330px;
  margin-left: 20px;
  border-left: 1px solid #eee;
  padding-left: 20px;
}

img {
  z-index: 10;
  width: 100%;
  max-width: 300px;
  position: relative;
}
</style>
