<template>
  <div>
    <g-button @click="show = !show">Click Me</g-button>

    <div style="margin-top: 20px; height: 210px">
      <g-collapse-transition>
        <div v-show="show">
          <div class="transition-box">g-collapse-transition</div>
          <div class="transition-box mt-[10px]">g-collapse-transition</div>
        </div>
      </g-collapse-transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style scoped>
.transition-box {
  width: 200px;
  height: 100px;
  border-radius: var(--g-border-radius-base);
  background-color: var(--g-color-primary);
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
}
</style>
