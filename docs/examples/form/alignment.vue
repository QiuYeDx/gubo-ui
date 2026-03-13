<template>
  <g-form
    :label-position="labelPosition"
    label-width="auto"
    :model="formLabelAlign"
    style="max-width: 600px"
  >
    <g-form-item label="Form Align" label-position="right">
      <g-radio-group v-model="labelPosition" aria-label="label position">
        <g-radio-button value="left">Left</g-radio-button>
        <g-radio-button value="right">Right</g-radio-button>
        <g-radio-button value="top">Top</g-radio-button>
      </g-radio-group>
    </g-form-item>
    <g-form-item label="Form Item Align" label-position="right">
      <g-radio-group
        v-model="itemLabelPosition"
        aria-label="item label position"
      >
        <g-radio-button value="">Empty</g-radio-button>
        <g-radio-button value="left">Left</g-radio-button>
        <g-radio-button value="right">Right</g-radio-button>
        <g-radio-button value="top">Top</g-radio-button>
      </g-radio-group>
    </g-form-item>
    <g-form-item label="Name" :label-position="itemLabelPosition">
      <g-input v-model="formLabelAlign.name" />
    </g-form-item>
    <g-form-item label="Activity zone" :label-position="itemLabelPosition">
      <g-input v-model="formLabelAlign.region" />
    </g-form-item>
    <g-form-item label="Activity form" :label-position="itemLabelPosition">
      <g-input v-model="formLabelAlign.type" />
    </g-form-item>
  </g-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormItemProps, FormProps } from 'element-plus'

const labelPosition = ref<FormProps['labelPosition']>('right')
const itemLabelPosition = ref<FormItemProps['labelPosition']>('')
const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>
