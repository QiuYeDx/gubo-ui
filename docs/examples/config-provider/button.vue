<template>
  <div>
    <div>
      <g-checkbox v-model="config.autoInsertSpace">
        autoInsertSpace
      </g-checkbox>
      <g-checkbox v-model="config.plain"> plain </g-checkbox>
      <g-checkbox v-model="config.round"> round </g-checkbox>
      <g-checkbox v-model="config.dashed"> dashed </g-checkbox>
      <g-checkbox v-model="config.text"> text </g-checkbox>
      <g-select v-model="config.type" class="ml-5" style="max-width: 150px">
        <g-option
          v-for="type in buttonTypes.filter(Boolean)"
          :key="type"
          :value="type"
        />
      </g-select>
    </div>
    <g-divider />
    <g-config-provider :button="config">
      <g-button>中文</g-button>
    </g-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { buttonTypes } from 'element-plus'

import type { ButtonConfigContext } from 'element-plus'

const config = reactive<ButtonConfigContext>({
  autoInsertSpace: true,
  type: 'default',
  plain: true,
  round: true,
  text: false,
  dashed: false,
})
</script>
