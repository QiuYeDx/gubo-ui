<template>
  <div>
    <div style="margin-bottom: 15px">fill: <g-switch v-model="fill" /></div>
    <g-space :fill="fill" wrap>
      <g-card v-for="i in 3" :key="i" class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <g-button class="button" text>Operation button</g-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </g-card>
    </g-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fill = ref(true)
</script>
