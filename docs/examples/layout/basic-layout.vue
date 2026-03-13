<template>
  <g-row>
    <g-col :span="24">
      <div class="grid-content ep-bg-purple-dark" />
    </g-col>
  </g-row>
  <g-row>
    <g-col :span="12">
      <div class="grid-content ep-bg-purple" />
    </g-col>
    <g-col :span="12">
      <div class="grid-content ep-bg-purple-light" />
    </g-col>
  </g-row>
  <g-row>
    <g-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </g-col>
    <g-col :span="8">
      <div class="grid-content ep-bg-purple-light" />
    </g-col>
    <g-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </g-col>
  </g-row>
  <g-row>
    <g-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </g-col>
    <g-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </g-col>
    <g-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </g-col>
    <g-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </g-col>
  </g-row>
  <g-row>
    <g-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </g-col>
    <g-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </g-col>
    <g-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </g-col>
    <g-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </g-col>
    <g-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </g-col>
    <g-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </g-col>
  </g-row>
</template>

<style>
.g-row {
  margin-bottom: 20px;
}

.g-row:last-child {
  margin-bottom: 0;
}

.g-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
