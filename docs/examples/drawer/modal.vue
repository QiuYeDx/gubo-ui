<template>
  <g-button plain @click="drawerVisible = true">
    Open the modal Drawer
  </g-button>

  <g-drawer v-model="drawerVisible" :modal="false" modal-penetrable>
    <span>It's a modal Drawer</span>
    <template #footer>
      <div class="drawer-footer">
        <g-button @click="drawerVisible = false">Cancel</g-button>
        <g-button type="primary" @click="drawerVisible = false">
          Confirm
        </g-button>
      </div>
    </template>
  </g-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawerVisible = ref(false)
</script>
