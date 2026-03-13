<template>
  <div style="max-width: 600px">
    <g-alert title="Primary alert" type="primary" effect="dark" />
    <g-alert title="Success alert" type="success" effect="dark" />
    <g-alert title="Info alert" type="info" effect="dark" />
    <g-alert title="Warning alert" type="warning" effect="dark" />
    <g-alert title="Error alert" type="error" effect="dark" />
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
