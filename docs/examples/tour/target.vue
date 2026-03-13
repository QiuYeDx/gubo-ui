<template>
  <g-button type="primary" @click="open = true">Begin Tour</g-button>

  <g-divider />

  <g-space>
    <g-button id="btn1">Upload</g-button>
    <g-button id="btn2" type="primary">Save</g-button>
    <g-button ref="btnRef" :icon="MoreFilled" />
  </g-space>

  <g-tour v-model="open">
    <g-tour-step
      target="#btn1"
      title="Upload File"
      description="Put you files here."
    />
    <g-tour-step :target="el" title="Save" description="Save your changes" />
    <g-tour-step
      :target="btnRef?.$el"
      title="Other Actions"
      description="Click to see other"
    />
  </g-tour>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'

import type { ButtonInstance } from 'element-plus'

const el = () => document.querySelector<HTMLElement>('#btn2')
const btnRef = ref<ButtonInstance>()

const open = ref(false)
</script>
