<template>
  <g-form :inline="true" :model="formInline" class="demo-form-inline">
    <g-form-item label="Approved by">
      <g-input v-model="formInline.user" placeholder="Approved by" clearable />
    </g-form-item>
    <g-form-item label="Activity zone">
      <g-select
        v-model="formInline.region"
        placeholder="Activity zone"
        clearable
      >
        <g-option label="Zone one" value="shanghai" />
        <g-option label="Zone two" value="beijing" />
      </g-select>
    </g-form-item>
    <g-form-item label="Activity time">
      <g-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </g-form-item>
    <g-form-item>
      <g-button type="primary" @click="onSubmit">Query</g-button>
    </g-form-item>
  </g-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style>
.demo-form-inline .g-input {
  --g-input-width: 220px;
}

.demo-form-inline .g-select {
  --g-select-width: 220px;
}
</style>
