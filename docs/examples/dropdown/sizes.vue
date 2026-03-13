<template>
  <g-dropdown size="large" split-button type="primary">
    Large
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item>Action 1</g-dropdown-item>
        <g-dropdown-item>Action 2</g-dropdown-item>
        <g-dropdown-item>Action 3</g-dropdown-item>
        <g-dropdown-item>Action 4</g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-dropdown>

  <g-dropdown split-button type="primary">
    Default
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item>Action 1</g-dropdown-item>
        <g-dropdown-item>Action 2</g-dropdown-item>
        <g-dropdown-item>Action 3</g-dropdown-item>
        <g-dropdown-item>Action 4</g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-dropdown>

  <g-dropdown size="small" split-button type="primary">
    Small
    <template #dropdown>
      <g-dropdown-menu>
        <g-dropdown-item>Action 1</g-dropdown-item>
        <g-dropdown-item>Action 2</g-dropdown-item>
        <g-dropdown-item>Action 3</g-dropdown-item>
        <g-dropdown-item>Action 4</g-dropdown-item>
      </g-dropdown-menu>
    </template>
  </g-dropdown>
</template>

<style scoped>
.example-showcase .g-dropdown + .g-dropdown {
  margin-left: 15px;
}
</style>
