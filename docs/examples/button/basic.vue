<template>
  <div class="button-example">
    <div class="button-row">
      <g-button>Default</g-button>
      <g-button type="primary">Primary</g-button>
      <g-button type="success">Success</g-button>
      <g-button type="info">Info</g-button>
      <g-button type="warning">Warning</g-button>
      <g-button type="danger">Danger</g-button>
    </div>

    <div class="button-row">
      <g-button plain>Plain</g-button>
      <g-button type="primary" plain>Primary</g-button>
      <g-button type="success" plain>Success</g-button>
      <g-button type="info" plain>Info</g-button>
      <g-button type="warning" plain>Warning</g-button>
      <g-button type="danger" plain>Danger</g-button>
    </div>

    <div class="button-row">
      <g-button round>Round</g-button>
      <g-button type="primary" round>Primary</g-button>
      <g-button type="success" round>Success</g-button>
      <g-button type="info" round>Info</g-button>
      <g-button type="warning" round>Warning</g-button>
      <g-button type="danger" round>Danger</g-button>
    </div>

    <div class="button-row">
      <g-button dashed>Dashed</g-button>
      <g-button type="primary" dashed>Primary</g-button>
      <g-button type="success" dashed>Success</g-button>
      <g-button type="info" dashed>Info</g-button>
      <g-button type="warning" dashed>Warning</g-button>
      <g-button type="danger" dashed>Danger</g-button>
    </div>

    <div class="button-row">
      <g-button :icon="Search" circle />
      <g-button type="primary" :icon="Edit" circle />
      <g-button type="success" :icon="Check" circle />
      <g-button type="info" :icon="Message" circle />
      <g-button type="warning" :icon="Star" circle />
      <g-button type="danger" :icon="Delete" circle />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>

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
