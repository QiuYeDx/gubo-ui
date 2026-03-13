<template>
  <g-select v-model="value" placeholder="Select" style="width: 240px">
    <g-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
    <template #footer>
      <g-button v-if="!isAdding" text bg size="small" @click="onAddOption">
        Add an option
      </g-button>
      <template v-else>
        <g-input
          v-model="optionName"
          class="option-input"
          placeholder="input option name"
          size="small"
        />
        <g-button type="primary" size="small" @click="onConfirm">
          confirm
        </g-button>
        <g-button size="small" @click="clear">cancel</g-button>
      </template>
    </template>
  </g-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { CheckboxValueType } from 'element-plus'

const isAdding = ref(false)
const value = ref<CheckboxValueType[]>([])
const optionName = ref('')
const cities = ref([
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
])

const onAddOption = () => {
  isAdding.value = true
}

const onConfirm = () => {
  if (optionName.value) {
    cities.value.push({
      label: optionName.value,
      value: optionName.value,
    })
    clear()
  }
}

const clear = () => {
  optionName.value = ''
  isAdding.value = false
}
</script>

<style>
.option-input {
  width: 100%;
  margin-bottom: 8px;
}
</style>
