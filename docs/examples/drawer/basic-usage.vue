<template>
  <g-radio-group v-model="direction">
    <g-radio value="ltr">left to right</g-radio>
    <g-radio value="rtl">right to left</g-radio>
    <g-radio value="ttb">top to bottom</g-radio>
    <g-radio value="btt">bottom to top</g-radio>
  </g-radio-group>

  <g-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </g-button>
  <g-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
    with footer
  </g-button>

  <g-drawer
    v-model="drawer"
    title="I am the title"
    :direction="direction"
    :before-close="handleClose"
  >
    <span>Hi, there!</span>
  </g-drawer>
  <g-drawer v-model="drawer2" :direction="direction">
    <template #header>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <g-radio v-model="radio1" value="Option 1" size="large">
          Option 1
        </g-radio>
        <g-radio v-model="radio1" value="Option 2" size="large">
          Option 2
        </g-radio>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <g-button @click="cancelClick">cancel</g-button>
        <g-button type="primary" @click="confirmClick">confirm</g-button>
      </div>
    </template>
  </g-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { GMessageBox } from 'element-plus'

import type { DrawerProps } from 'element-plus'

const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref<DrawerProps['direction']>('rtl')
const radio1 = ref('Option 1')
const handleClose = (done: () => void) => {
  GMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  GMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false
    })
    .catch(() => {
      // catch error
    })
}
</script>
