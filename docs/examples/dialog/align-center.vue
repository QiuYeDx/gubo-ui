<template>
  <g-button plain @click="centerDialogVisible = true">
    Click to open the Dialog
  </g-button>

  <g-dialog
    v-model="centerDialogVisible"
    title="Warning"
    width="500"
    align-center
  >
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <div class="dialog-footer">
        <g-button @click="centerDialogVisible = false">Cancel</g-button>
        <g-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>
