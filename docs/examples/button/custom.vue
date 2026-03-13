<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div>
    <g-button color="#626aef" :dark="isDark">Default</g-button>
    <g-button color="#626aef" :dark="isDark" plain>Plain</g-button>

    <g-button color="#626aef" :dark="isDark" disabled>Disabled</g-button>
    <g-button color="#626aef" :dark="isDark" disabled plain>
      Disabled Plain
    </g-button>
  </div>
</template>
