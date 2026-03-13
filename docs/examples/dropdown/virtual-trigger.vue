<template>
  <g-card
    class="content"
    @click="handleClick"
    @contextmenu="handleContextmenu"
  >
    Right click
  </g-card>
  <g-dropdown
    ref="dropdownRef"
    :virtual-ref="triggerRef"
    :show-arrow="false"
    :popper-options="{
      modifiers: [{ name: 'offset', options: { offset: [0, 0] } }],
    }"
    virtual-triggering
    trigger="contextmenu"
    placement="bottom-start"
  >
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item :icon="Plus">Action 1</g-dropdown-item>
        <g-dropdown-item :icon="CirclePlusFilled"> Action 2 </g-dropdown-item>
        <g-dropdown-item :icon="CirclePlus">Action 3</g-dropdown-item>
        <g-dropdown-item :icon="Check">Action 4</g-dropdown-item>
        <g-dropdown-item :icon="CircleCheck">Action 5</g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'

import type { DropdownInstance } from 'element-plus'

const dropdownRef = ref<DropdownInstance>()
const position = ref({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
} as DOMRect)

const triggerRef = ref({
  getBoundingClientRect: () => position.value,
})

const handleClick = () => {
  dropdownRef.value?.handleClose()
}

const handleContextmenu = (event: MouseEvent) => {
  const { clientX, clientY } = event
  position.value = DOMRect.fromRect({
    x: clientX,
    y: clientY,
  })
  event.preventDefault()
  dropdownRef.value?.handleOpen()
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>
