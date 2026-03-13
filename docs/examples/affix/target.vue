<template>
  <div class="affix-container">
    <g-affix target=".affix-container" :offset="80">
      <g-button type="primary">Target container</g-button>
    </g-affix>
  </div>
</template>

<style scoped>
.affix-container {
  text-align: center;
  height: 400px;
  border-radius: 4px;
  background: var(--g-color-primary-light-9);
}
</style>
