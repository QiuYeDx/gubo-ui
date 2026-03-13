<template>
  <div>
    <g-radio-group v-model="size" aria-label="size control">
      <g-radio-button value="large">large</g-radio-button>
      <g-radio-button value="default">default</g-radio-button>
      <g-radio-button value="small">small</g-radio-button>
    </g-radio-group>
    <g-radio-group v-model="labelPosition" aria-label="position control">
      <g-radio-button value="left">Left</g-radio-button>
      <g-radio-button value="right">Right</g-radio-button>
      <g-radio-button value="top">Top</g-radio-button>
    </g-radio-group>
  </div>
  <br />
  <g-form
    style="max-width: 600px"
    :model="sizeForm"
    label-width="auto"
    :label-position="labelPosition"
    :size="size"
  >
    <g-form-item label="Activity name">
      <g-input v-model="sizeForm.name" />
    </g-form-item>
    <g-form-item label="Activity zone">
      <g-select
        v-model="sizeForm.region"
        placeholder="please select your zone"
      >
        <g-option label="Zone one" value="shanghai" />
        <g-option label="Zone two" value="beijing" />
      </g-select>
    </g-form-item>
    <g-form-item label="Activity time">
      <g-col :span="11">
        <g-date-picker
          v-model="sizeForm.date1"
          type="date"
          aria-label="Pick a date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </g-col>
      <g-col class="text-center" :span="1" style="margin: 0 0.5rem">-</g-col>
      <g-col :span="11">
        <g-time-picker
          v-model="sizeForm.date2"
          aria-label="Pick a time"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </g-col>
    </g-form-item>
    <g-form-item label="Activity type">
      <g-checkbox-group v-model="sizeForm.type">
        <g-checkbox-button value="Online activities" name="type">
          Online activities
        </g-checkbox-button>
        <g-checkbox-button value="Promotion activities" name="type">
          Promotion activities
        </g-checkbox-button>
      </g-checkbox-group>
    </g-form-item>
    <g-form-item label="Resources">
      <g-radio-group v-model="sizeForm.resource">
        <g-radio border value="Sponsor">Sponsor</g-radio>
        <g-radio border value="Venue">Venue</g-radio>
      </g-radio-group>
    </g-form-item>
    <g-form-item>
      <g-button type="primary" @click="onSubmit">Create</g-button>
      <g-button>Cancel</g-button>
    </g-form-item>
  </g-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { ComponentSize, FormProps } from 'element-plus'

const size = ref<ComponentSize>('default')
const labelPosition = ref<FormProps['labelPosition']>('right')

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
}
</script>

<style>
.g-radio-group {
  margin-right: 12px;
}
</style>
