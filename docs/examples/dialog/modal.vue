<template>
  <g-button plain @click="dialogVisible = true">
    Open the modal Dialog
  </g-button>

  <g-dialog v-model="dialogVisible" :modal="false" modal-penetrable>
    <span>It's a modal Dialog</span>
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
