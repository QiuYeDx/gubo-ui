<template>
  <div class="block text-center">
    <span class="demonstration">
      Switch when indicator is hovered (default)
    </span>
    <g-carousel height="150px">
      <g-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </g-carousel-item>
    </g-carousel>
  </div>
  <div class="block text-center" m="t-4">
    <span class="demonstration">Switch when indicator is clicked</span>
    <g-carousel trigger="click" height="150px">
      <g-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </g-carousel-item>
    </g-carousel>
  </div>
</template>

<style scoped>
.demonstration {
  color: var(--g-text-color-secondary);
}

.g-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.g-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.g-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
