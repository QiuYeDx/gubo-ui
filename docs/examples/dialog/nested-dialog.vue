<template>
  <g-button plain @click="outerVisible = true">
    Open the outer Dialog
  </g-button>

  <g-dialog v-model="outerVisible" title="Outer Dialog" width="800">
    <span>This is the outer Dialog</span>
    <g-dialog
      v-model="innerVisible"
      width="500"
      title="Inner Dialog"
      append-to-body
    >
      <span>This is the inner Dialog</span>
    </g-dialog>
    <template #footer>
      <div class="dialog-footer">
        <g-button @click="outerVisible = false">Cancel</g-button>
        <g-button type="primary" @click="innerVisible = true">
          Open the inner Dialog
        </g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>
