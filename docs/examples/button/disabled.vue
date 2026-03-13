<template>
  <div class="button-example">
    <div class="button-row">
      <g-button disabled>Default</g-button>
      <g-button type="primary" disabled>Primary</g-button>
      <g-button type="success" disabled>Success</g-button>
      <g-button type="info" disabled>Info</g-button>
      <g-button type="warning" disabled>Warning</g-button>
      <g-button type="danger" disabled>Danger</g-button>
    </div>

    <div class="button-row">
      <g-button plain disabled>Plain</g-button>
      <g-button type="primary" plain disabled>Primary</g-button>
      <g-button type="success" plain disabled>Success</g-button>
      <g-button type="info" plain disabled>Info</g-button>
      <g-button type="warning" plain disabled>Warning</g-button>
      <g-button type="danger" plain disabled>Danger</g-button>
    </div>
  </div>
</template>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.button-row > * {
  margin: 0;
}
</style>
