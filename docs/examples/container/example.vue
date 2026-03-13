<template>
  <g-container class="layout-container-demo" style="height: 500px">
    <g-aside width="200px">
      <g-scrollbar>
        <g-menu :default-openeds="['1', '3']">
          <g-sub-menu index="1">
            <template #title>
              <g-icon><message /></g-icon>Navigator One
            </template>
            <g-menu-item-group>
              <template #title>Group 1</template>
              <g-menu-item index="1-1">Option 1</g-menu-item>
              <g-menu-item index="1-2">Option 2</g-menu-item>
            </g-menu-item-group>
            <g-menu-item-group title="Group 2">
              <g-menu-item index="1-3">Option 3</g-menu-item>
            </g-menu-item-group>
            <g-sub-menu index="1-4">
              <template #title>Option4</template>
              <g-menu-item index="1-4-1">Option 4-1</g-menu-item>
            </g-sub-menu>
          </g-sub-menu>
          <g-sub-menu index="2">
            <template #title>
              <g-icon><icon-menu /></g-icon>Navigator Two
            </template>
            <g-menu-item-group>
              <template #title>Group 1</template>
              <g-menu-item index="2-1">Option 1</g-menu-item>
              <g-menu-item index="2-2">Option 2</g-menu-item>
            </g-menu-item-group>
            <g-menu-item-group title="Group 2">
              <g-menu-item index="2-3">Option 3</g-menu-item>
            </g-menu-item-group>
            <g-sub-menu index="2-4">
              <template #title>Option 4</template>
              <g-menu-item index="2-4-1">Option 4-1</g-menu-item>
            </g-sub-menu>
          </g-sub-menu>
          <g-sub-menu index="3">
            <template #title>
              <g-icon><setting /></g-icon>Navigator Three
            </template>
            <g-menu-item-group>
              <template #title>Group 1</template>
              <g-menu-item index="3-1">Option 1</g-menu-item>
              <g-menu-item index="3-2">Option 2</g-menu-item>
            </g-menu-item-group>
            <g-menu-item-group title="Group 2">
              <g-menu-item index="3-3">Option 3</g-menu-item>
            </g-menu-item-group>
            <g-sub-menu index="3-4">
              <template #title>Option 4</template>
              <g-menu-item index="3-4-1">Option 4-1</g-menu-item>
            </g-sub-menu>
          </g-sub-menu>
        </g-menu>
      </g-scrollbar>
    </g-aside>

    <g-container>
      <g-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <g-dropdown>
            <g-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </g-icon>
            <template #dropdown>
              <g-dropdown-menu>
                <g-dropdown-item>View</g-dropdown-item>
                <g-dropdown-item>Add</g-dropdown-item>
                <g-dropdown-item>Delete</g-dropdown-item>
              </g-dropdown-menu>
            </template>
          </g-dropdown>
          <span>Tom</span>
        </div>
      </g-header>

      <g-main>
        <g-scrollbar>
          <g-table :data="tableData">
            <g-table-column prop="date" label="Date" width="140" />
            <g-table-column prop="name" label="Name" width="120" />
            <g-table-column prop="address" label="Address" />
          </g-table>
        </g-scrollbar>
      </g-main>
    </g-container>
  </g-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>
.layout-container-demo .g-header {
  position: relative;
  background-color: var(--g-color-primary-light-7);
  color: var(--g-text-color-primary);
}
.layout-container-demo .g-aside {
  color: var(--g-text-color-primary);
  background: var(--g-color-primary-light-8);
}
.layout-container-demo .g-menu {
  border-right: none;
}
.layout-container-demo .g-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
