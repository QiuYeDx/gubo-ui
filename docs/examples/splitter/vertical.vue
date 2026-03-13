<template>
  <div
    style="height: 250px; box-shadow: var(--g-border-color-light) 0px 0px 10px"
  >
    <g-splitter layout="vertical">
      <g-splitter-panel>
        <div class="demo-panel">1</div>
      </g-splitter-panel>
      <g-splitter-panel>
        <div class="demo-panel">2</div>
      </g-splitter-panel>
    </g-splitter>
  </div>
</template>

<style scoped>
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
