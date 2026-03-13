<template>
  <div>
    <g-input
      v-model="input1"
      style="max-width: 600px"
      placeholder="Please input"
    >
      <template #prepend>Http://</template>
    </g-input>
  </div>
  <div class="mt-4">
    <g-input
      v-model="input2"
      style="max-width: 600px"
      placeholder="Please input"
    >
      <template #append>.com</template>
    </g-input>
  </div>
  <div class="mt-4">
    <g-input
      v-model="input3"
      style="max-width: 600px"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <g-select v-model="select" placeholder="Select" style="width: 115px">
          <g-option label="Restaurant" value="1" />
          <g-option label="Order No." value="2" />
          <g-option label="Tel" value="3" />
        </g-select>
      </template>
      <template #append>
        <g-button :icon="Search" />
      </template>
    </g-input>
  </div>
  <div class="mt-4">
    <g-input
      v-model="input3"
      style="max-width: 600px"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <g-button :icon="Search" />
      </template>
      <template #append>
        <g-select v-model="select" placeholder="Select" style="width: 115px">
          <g-option label="Restaurant" value="1" />
          <g-option label="Order No." value="2" />
          <g-option label="Tel" value="3" />
        </g-select>
      </template>
    </g-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
</script>

<style>
.input-with-select .g-input-group__prepend {
  background-color: var(--g-fill-color-blank);
}
</style>
