<template>
  <g-badge :value="200" :max="99" class="item">
    <g-button>comments</g-button>
  </g-badge>
  <g-badge :value="100" :max="10" class="item">
    <g-button>replies</g-button>
  </g-badge>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
