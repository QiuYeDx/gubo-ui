<template>
  <div class="flex flex-wrap gap-1">
    <g-button class="!ml-0" plain @click="open">Common VNode</g-button>
    <g-button class="!ml-0" plain @click="open1">Dynamic props</g-button>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { GNotification, GSwitch } from 'element-plus'

const open = () => {
  GNotification({
    title: 'Use Vnode',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const open1 = () => {
  const checked = ref<boolean | string | number>(false)
  GNotification({
    title: 'Use Vnode',
    // Should pass a function if VNode contains dynamic props
    message: () =>
      h(GSwitch, {
        modelValue: checked.value,
        'onUpdate:modelValue': (val: boolean | string | number) => {
          checked.value = val
        },
      }),
  })
}
</script>
