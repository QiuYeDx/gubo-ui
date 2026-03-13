<template>
  <div style="max-width: 600px">
    <g-alert title="Primary alert" type="primary" center show-icon />
    <g-alert title="Success alert" type="success" center show-icon />
    <g-alert title="Info alert" type="info" center show-icon />
    <g-alert title="Warning alert" type="warning" center show-icon />
    <g-alert title="Error alert" type="error" center show-icon />
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
