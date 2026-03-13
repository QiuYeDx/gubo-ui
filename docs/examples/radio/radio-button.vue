<template>
  <div>
    <g-radio-group v-model="radio" size="large" fill="#409eff">
      <g-radio-button label="New York" value="New York" />
      <g-radio-button label="Washington" value="Washington" />
      <g-radio-button label="Los Angeles" value="Los Angeles" />
      <g-radio-button label="Chicago" value="Chicago" />
    </g-radio-group>
  </div>
  <div style="margin-top: 20px">
    <g-radio-group v-model="radio" text-color="#fff" fill="#6c6cff">
      <g-radio-button label="New York" value="New York" />
      <g-radio-button label="Washington" value="Washington" />
      <g-radio-button label="Los Angeles" value="Los Angeles" />
      <g-radio-button label="Chicago" value="Chicago" />
    </g-radio-group>
  </div>
  <div style="margin-top: 20px">
    <g-radio-group v-model="radio" size="small">
      <g-radio-button label="New York" value="New York" />
      <g-radio-button label="Washington" value="Washington" disabled />
      <g-radio-button label="Los Angeles" value="Los Angeles" />
      <g-radio-button label="Chicago" value="Chicago" />
    </g-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('New York')
</script>
