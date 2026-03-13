<template>
  <g-button type="primary" @click="drawer = true"> open </g-button>

  <g-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
    <div>
      <g-button @click="innerDrawer = true">Click me!</g-button>
      <g-drawer
        v-model="innerDrawer"
        title="I'm inner Drawer"
        :append-to-body="true"
        :before-close="handleClose"
      >
        <p>_(:зゝ∠)_</p>
      </g-drawer>
    </div>
  </g-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { GMessageBox } from 'element-plus'

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = (done: () => void) => {
  GMessageBox.confirm('You still have unsaved data, proceed?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
