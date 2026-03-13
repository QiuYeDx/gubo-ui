<template>
  <g-button plain @click="dialogVisible = true">
    Click to open the Dialog
  </g-button>

  <g-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <g-button @click="dialogVisible = false">Cancel</g-button>
        <g-button type="primary" @click="dialogVisible = false">
          Confirm
        </g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { GMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  GMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
