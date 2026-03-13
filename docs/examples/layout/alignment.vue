<template>
  <g-row class="row-bg">
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple-light" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
  </g-row>
  <g-row class="row-bg" justify="center">
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple-light" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
  </g-row>
  <g-row class="row-bg" justify="end">
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple-light" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
  </g-row>
  <g-row class="row-bg" justify="space-between">
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple-light" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
  </g-row>
  <g-row class="row-bg" justify="space-around">
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple-light" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
  </g-row>
  <g-row class="row-bg" justify="space-evenly">
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple-light" /></g-col>
    <g-col :span="6"><div class="grid-content ep-bg-purple" /></g-col>
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
