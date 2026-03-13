<script lang="ts" setup>
defineProps<{
  version: string
}>()
</script>

<template>
  <g-tag size="small" effect="plain" hit round>
    {{ version }}
  </g-tag>
</template>
