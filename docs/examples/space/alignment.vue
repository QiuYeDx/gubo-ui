<template>
  <div class="alignment-container">
    <g-space>
      string
      <g-button> button </g-button>
      <g-card>
        <template #header> header </template>
        body
      </g-card>
    </g-space>
  </div>
  <div class="alignment-container">
    <g-space alignment="flex-start">
      string
      <g-button> button </g-button>
      <g-card>
        <template #header> header </template>
        body
      </g-card>
    </g-space>
  </div>
  <div class="alignment-container">
    <g-space alignment="flex-end">
      string
      <g-button> button </g-button>
      <g-card>
        <template #header> header </template>
        body
      </g-card>
    </g-space>
  </div>
</template>

<style>
.alignment-container {
  width: 240px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid var(--g-border-color);
}
</style>
