<template>
  <div class="demo-progress">
    <g-progress :percentage="50" />
    <g-progress :percentage="100" :format="format" />
    <g-progress :percentage="100" status="success" />
    <g-progress :percentage="100" status="warning" />
    <g-progress :percentage="50" status="exception" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped>
.demo-progress .g-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
