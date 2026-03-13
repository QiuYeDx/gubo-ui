<template>
  <g-steps
    style="max-width: 600px"
    :space="200"
    :active="1"
    finish-status="success"
  >
    <g-step title="Done" />
    <g-step title="Processing" />
    <g-step title="Step 3" />
  </g-steps>
</template>
