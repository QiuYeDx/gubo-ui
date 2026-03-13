<template>
  <g-checkbox-group v-model="checkList">
    <g-checkbox label="Option A" value="Value A" />
    <g-checkbox label="Option B" value="Value B" />
    <g-checkbox label="Option C" value="Value C" />
    <g-checkbox label="disabled" value="Value disabled" disabled />
    <g-checkbox
      label="selected and disabled"
      value="Value selected and disabled"
      disabled
    />
  </g-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['Value selected and disabled', 'Value A'])
</script>
