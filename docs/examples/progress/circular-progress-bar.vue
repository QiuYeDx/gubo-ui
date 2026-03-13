<template>
  <div class="demo-progress">
    <g-progress type="circle" :percentage="0" />
    <g-progress type="circle" :percentage="25" />
    <g-progress type="circle" :percentage="100" status="success" />
    <g-progress type="circle" :percentage="70" status="warning" />
    <g-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>

<style scoped>
.demo-progress .g-progress--circle {
  margin-right: 15px;
}
</style>
