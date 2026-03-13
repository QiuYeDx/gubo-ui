<template>
  <div>
    <div class="flex gap-4">
      <div class="flex flex-col basis-150px gap-1">
        <span>Type:</span>
        <g-select v-model="config.type">
          <g-option v-for="type in linkTypes" :key="type" :value="type" />
        </g-select>
      </div>
      <div class="flex flex-col basis-150px gap-1">
        <span>Underline:</span>
        <g-select v-model="config.underline">
          <g-option
            v-for="type in underlineOptions"
            :key="type"
            :value="type"
          />
        </g-select>
      </div>
    </div>
    <g-divider />
    <g-config-provider :link="config">
      <g-link>Link desu!</g-link>
    </g-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import type { LinkConfigContext } from 'element-plus'

const linkTypes = ['primary', 'success', 'warning', 'info', 'danger', 'default']
const underlineOptions = ['always', 'never', 'hover']

const config = reactive<LinkConfigContext>({
  type: 'success',
  underline: 'always',
})
</script>
