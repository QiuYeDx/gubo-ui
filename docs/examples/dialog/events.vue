<template>
  <g-button plain @click="dialogVisible = true">
    Open the event Dialog
  </g-button>

  <g-dialog
    v-model="dialogVisible"
    modal-class="overide-animation"
    :before-close="
      (doneFn) => {
        ;(console.log('before-close'), doneFn())
      }
    "
    @open="console.log('open')"
    @open-auto-focus="console.log('open-auto-focus')"
    @opened="console.log('opened')"
    @close="console.log('close')"
    @close-auto-focus="console.log('close-auto-focus')"
    @closed="console.log('closed')"
  >
    <span>It's a event Dialog</span>
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

const dialogVisible = ref(false)
</script>
