<template>
  <g-button plain @click="centerDialogVisible = true">
    Click to open Dialog
  </g-button>

  <g-dialog
    v-model="centerDialogVisible"
    title="Notice"
    width="500"
    destroy-on-close
    center
  >
    <span>
      Notice: before the dialog is opened for the first time, this node and the
      one below will not be rendered.
    </span>
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
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
