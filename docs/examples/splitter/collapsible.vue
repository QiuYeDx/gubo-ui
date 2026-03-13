<template>
  <g-switch
    v-model="isCollapsible"
    active-text="enable"
    inactive-text="disable"
    inline-prompt
    class="mb-2"
  />
  <div
    style="height: 250px; box-shadow: var(--g-border-color-light) 0px 0px 10px"
  >
    <g-splitter>
      <g-splitter-panel :collapsible="isCollapsible" min="50">
        <div class="demo-panel">1</div>
      </g-splitter-panel>
      <g-splitter-panel :collapsible="isCollapsible">
        <div class="demo-panel">2</div>
      </g-splitter-panel>
      <g-splitter-panel>
        <div class="demo-panel">3</div>
      </g-splitter-panel>
      <g-splitter-panel :collapsible="isCollapsible">
        <g-splitter layout="vertical">
          <g-splitter-panel :collapsible="isCollapsible">
            <div class="demo-panel">4</div>
          </g-splitter-panel>
          <g-splitter-panel :collapsible="isCollapsible">
            <div class="demo-panel">5</div>
          </g-splitter-panel>
        </g-splitter>
      </g-splitter-panel>
    </g-splitter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapsible = ref(true)
</script>

<style scoped>
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
