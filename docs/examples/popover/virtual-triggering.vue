<template>
  <g-button ref="buttonRef" v-click-outside="onClickOutside">
    Click me
  </g-button>

  <g-popover
    ref="popoverRef"
    :virtual-ref="buttonRef"
    trigger="click"
    title="With title"
    virtual-triggering
  >
    <span> Some content </span>
  </g-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'

import type { PopoverInstance } from 'element-plus'

const buttonRef = ref()
const popoverRef = ref<PopoverInstance>()
const onClickOutside = () => {
  popoverRef.value?.hide()
}
</script>
