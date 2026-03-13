<template>
  <g-button type="primary" @click="open = true">Begin Tour</g-button>

  <g-divider />

  <g-space>
    <g-button ref="ref1">Upload</g-button>
    <g-button ref="ref2" type="primary">Save</g-button>
    <g-button ref="ref3" :icon="MoreFilled" />
  </g-space>

  <g-tour v-model="open" type="primary" :mask="false">
    <g-tour-step
      :target="ref1?.$el"
      title="Upload File"
      description="Put you files here."
    />
    <g-tour-step
      :target="ref2?.$el"
      title="Save"
      description="Save your changes"
    />
    <g-tour-step
      :target="ref3?.$el"
      title="Other Actions"
      description="Click to see other"
    />
  </g-tour>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'

import type { ButtonInstance } from 'element-plus'

const ref1 = ref<ButtonInstance>()
const ref2 = ref<ButtonInstance>()
const ref3 = ref<ButtonInstance>()

const open = ref(false)
</script>
