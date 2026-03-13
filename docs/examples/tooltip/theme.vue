<template>
  <g-tooltip content="Top center" placement="top">
    <g-button>Dark</g-button>
  </g-tooltip>
  <g-tooltip content="Bottom center" placement="bottom" effect="light">
    <g-button>Light</g-button>
  </g-tooltip>

  <g-tooltip content="Bottom center" effect="customized">
    <g-button>Customized theme</g-button>
  </g-tooltip>
</template>

<style>
.g-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.g-popper.is-customized .g-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
