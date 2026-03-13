<template>
  <div>
    <g-checkbox v-model="checked1" label="Option1" size="large" border />
    <g-checkbox v-model="checked2" label="Option2" size="large" border />
  </div>
  <div class="mt-4">
    <g-checkbox v-model="checked3" label="Option1" border />
    <g-checkbox v-model="checked4" label="Option2" border />
  </div>
  <div class="mt-4">
    <g-checkbox-group v-model="checkboxGroup1" size="small">
      <g-checkbox label="Option1" value="Value1" border />
      <g-checkbox label="Option2" value="Value2" border />
    </g-checkbox-group>
  </div>
  <div class="mt-4">
    <g-checkbox-group v-model="checkboxGroup1" size="small">
      <g-checkbox label="Option1" value="Value1" border disabled />
      <g-checkbox label="Option2" value="Value2" border disabled />
    </g-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(true)
const checkboxGroup1 = ref(['Value1'])
</script>
