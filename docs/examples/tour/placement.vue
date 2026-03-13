<template>
  <g-button ref="btnRef" type="primary" @click="open = true">
    Begin Tour
  </g-button>

  <g-tour v-model="open">
    <g-tour-step
      title="Center"
      description="Displayed in the center of screen."
    />
    <g-tour-step
      title="Right"
      description="On the right of target."
      placement="right"
      :target="btnRef?.$el"
    />
    <g-tour-step
      title="Top"
      description="On the top of target."
      placement="top"
      :target="btnRef?.$el"
    />
  </g-tour>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { ButtonInstance } from 'element-plus'

const btnRef = ref<ButtonInstance>()

const open = ref(false)
</script>
