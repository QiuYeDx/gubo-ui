<template>
  <g-popover :visible="visible" placement="top" :width="180">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <g-button size="small" text @click="visible = false">cancel</g-button>
      <g-button size="small" type="primary" @click="visible = false">
        confirm
      </g-button>
    </div>
    <template #reference>
      <g-button @click="visible = true">Delete</g-button>
    </template>
  </g-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
