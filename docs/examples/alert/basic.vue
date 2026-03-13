<template>
  <div style="max-width: 600px">
    <g-alert title="Primary alert" type="primary" />
    <g-alert title="Success alert" type="success" />
    <g-alert title="Info alert" type="info" />
    <g-alert title="Warning alert" type="warning" />
    <g-alert title="Error alert" type="error" />
  </div>
</template>

<style scoped>
.g-alert {
  margin: 20px 0 0;
}
.g-alert:first-child {
  margin: 0;
}
</style>
