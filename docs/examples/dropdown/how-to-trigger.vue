<template>
  <g-row class="block-col-2">
    <g-col :span="8">
      <span class="demonstration">hover to trigger</span>
      <g-dropdown>
        <span class="g-dropdown-link">
          Dropdown List<g-icon class="g-icon--right"><arrow-down /></g-icon>
        </span>
        <template #dropdown>
          <g-dropdown-menu>
            <g-dropdown-item :icon="Plus">Action 1</g-dropdown-item>
            <g-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </g-dropdown-item>
            <g-dropdown-item :icon="CirclePlus">Action 3</g-dropdown-item>
            <g-dropdown-item :icon="Check">Action 4</g-dropdown-item>
            <g-dropdown-item :icon="CircleCheck">Action 5</g-dropdown-item>
          </g-dropdown-menu>
        </template>
      </g-dropdown>
    </g-col>
    <g-col :span="8">
      <span class="demonstration">click to trigger</span>
      <g-dropdown trigger="click">
        <span class="g-dropdown-link">
          Dropdown List<g-icon class="g-icon--right"><arrow-down /></g-icon>
        </span>
        <template #dropdown>
          <g-dropdown-menu>
            <g-dropdown-item :icon="Plus">Action 1</g-dropdown-item>
            <g-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </g-dropdown-item>
            <g-dropdown-item :icon="CirclePlus">Action 3</g-dropdown-item>
            <g-dropdown-item :icon="Check">Action 4</g-dropdown-item>
            <g-dropdown-item :icon="CircleCheck">Action 5</g-dropdown-item>
          </g-dropdown-menu>
        </template>
      </g-dropdown>
    </g-col>
    <g-col :span="8">
      <span class="demonstration">right click to trigger</span>
      <g-dropdown trigger="contextmenu">
        <span class="g-dropdown-link">
          Dropdown List<g-icon class="g-icon--right"><arrow-down /></g-icon>
        </span>
        <template #dropdown>
          <g-dropdown-menu>
            <g-dropdown-item :icon="Plus">Action 1</g-dropdown-item>
            <g-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </g-dropdown-item>
            <g-dropdown-item :icon="CirclePlus">Action 3</g-dropdown-item>
            <g-dropdown-item :icon="Check">Action 4</g-dropdown-item>
            <g-dropdown-item :icon="CircleCheck">Action 5</g-dropdown-item>
          </g-dropdown-menu>
        </template>
      </g-dropdown>
    </g-col>
  </g-row>
</template>

<script lang="ts" setup>
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--g-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.block-col-2 .g-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
