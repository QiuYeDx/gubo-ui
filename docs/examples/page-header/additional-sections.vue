<template>
  <g-page-header icon="">
    <template #content>
      <div class="flex items-center">
        <g-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="text-large font-600 mr-3"> Title </span>
        <span class="text-sm mr-2" style="color: var(--g-text-color-regular)">
          Sub title
        </span>
        <g-tag>Default</g-tag>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <g-button>Print</g-button>
        <g-button type="primary" class="ml-2">Edit</g-button>
      </div>
    </template>
  </g-page-header>
</template>
