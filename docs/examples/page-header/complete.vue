<template>
  <div aria-label="A complete example of page header">
    <g-page-header @back="onBack">
      <template #breadcrumb>
        <g-breadcrumb separator="/">
          <g-breadcrumb-item :to="{ path: './page-header.html' }">
            homepage
          </g-breadcrumb-item>
          <g-breadcrumb-item>
            <a href="./page-header.html">route 1</a>
          </g-breadcrumb-item>
          <g-breadcrumb-item>route 2</g-breadcrumb-item>
        </g-breadcrumb>
      </template>
      <template #content>
        <div class="flex items-center">
          <g-avatar
            class="mr-3"
            :size="32"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="text-large font-600 mr-3"> Title </span>
          <span
            class="text-sm mr-2"
            style="color: var(--g-text-color-regular)"
          >
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

      <g-descriptions :column="3" size="small" class="mt-4">
        <g-descriptions-item label="Username">
          kooriookami
        </g-descriptions-item>
        <g-descriptions-item label="Telephone">
          18100000000
        </g-descriptions-item>
        <g-descriptions-item label="Place">Suzhou</g-descriptions-item>
        <g-descriptions-item label="Remarks">
          <g-tag size="small">School</g-tag>
        </g-descriptions-item>
        <g-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </g-descriptions-item>
      </g-descriptions>
      <p class="mt-4 text-sm">
        Element Plus team uses <b>weekly</b> release strategy under normal
        circumstance, but critical bug fixes would require hotfix so the actual
        release number <b>could be</b> more than 1 per week.
      </p>
    </g-page-header>
  </div>
</template>

<script setup lang="ts">
import { GNotification as notify } from 'element-plus'

const onBack = () => {
  notify('Back')
}
</script>
