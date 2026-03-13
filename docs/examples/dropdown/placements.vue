<template>
  <div class="flex flex-wrap items-center gap-4">
    <g-dropdown placement="top-start">
      <g-button> topStart </g-button>
      <template #dropdown>
        <g-dropdown-menu>
          <g-dropdown-item>The Action 1st</g-dropdown-item>
          <g-dropdown-item>The Action 2nd</g-dropdown-item>
          <g-dropdown-item>The Action 3rd</g-dropdown-item>
        </g-dropdown-menu>
      </template>
    </g-dropdown>
    <g-dropdown placement="top">
      <g-button> top </g-button>
      <template #dropdown>
        <g-dropdown-menu>
          <g-dropdown-item>The Action 1st</g-dropdown-item>
          <g-dropdown-item>The Action 2nd</g-dropdown-item>
          <g-dropdown-item>The Action 3rd</g-dropdown-item>
        </g-dropdown-menu>
      </template>
    </g-dropdown>
    <g-dropdown placement="top-end">
      <g-button> topEnd </g-button>
      <template #dropdown>
        <g-dropdown-menu>
          <g-dropdown-item>The Action 1st</g-dropdown-item>
          <g-dropdown-item>The Action 2nd</g-dropdown-item>
          <g-dropdown-item>The Action 3rd</g-dropdown-item>
        </g-dropdown-menu>
      </template>
    </g-dropdown>
    <g-dropdown placement="bottom-start">
      <g-button> bottomStart </g-button>
      <template #dropdown>
        <g-dropdown-menu>
          <g-dropdown-item>The Action 1st</g-dropdown-item>
          <g-dropdown-item>The Action 2nd</g-dropdown-item>
          <g-dropdown-item>The Action 3rd</g-dropdown-item>
        </g-dropdown-menu>
      </template>
    </g-dropdown>
    <g-dropdown placement="bottom">
      <g-button> bottom </g-button>
      <template #dropdown>
        <g-dropdown-menu>
          <g-dropdown-item>The Action 1st</g-dropdown-item>
          <g-dropdown-item>The Action 2nd</g-dropdown-item>
          <g-dropdown-item>The Action 3rd</g-dropdown-item>
        </g-dropdown-menu>
      </template>
    </g-dropdown>
    <g-dropdown placement="bottom-end">
      <g-button> bottomEnd </g-button>
      <template #dropdown>
        <g-dropdown-menu>
          <g-dropdown-item>The Action 1st</g-dropdown-item>
          <g-dropdown-item>The Action 2nd</g-dropdown-item>
          <g-dropdown-item>The Action 3rd</g-dropdown-item>
        </g-dropdown-menu>
      </template>
    </g-dropdown>
  </div>
</template>
