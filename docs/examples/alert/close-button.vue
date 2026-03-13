<template>
  <div style="max-width: 600px">
    <g-alert title="Unclosable alert" type="success" :closable="false" />
    <g-alert title="Customized close text" type="info" close-text="Gotcha" />
    <g-alert title="Alert with callback" type="warning" @close="hello" />
  </div>
</template>

<script lang="ts" setup>
const hello = () => {
  // eslint-disable-next-line no-alert
  alert('Hello World!')
}
</script>

<style scoped>
.g-alert {
  margin: 20px 0 0;
}
.g-alert:first-child {
  margin: 0;
}
</style>
